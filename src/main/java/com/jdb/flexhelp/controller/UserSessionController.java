package com.jdb.flexhelp.controller;

import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.core.oidc.OidcIdToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jdb.flexhelp.entities.ServiceProvider;
import com.jdb.flexhelp.entities.User;
import com.jdb.flexhelp.repositories.UserSessionRepository;

@RestController
public class UserSessionController {

	private final Logger log = LoggerFactory.getLogger(UserSessionController.class);
	private ClientRegistration registration;
	private UserSessionRepository userRepository;

	public UserSessionController(ClientRegistrationRepository registrations, UserSessionRepository userRepository) {
		this.registration = registrations.findByRegistrationId("okta");
		this.userRepository = userRepository;
	}

	@GetMapping("/api/user")
	public ResponseEntity<?> getUser(@AuthenticationPrincipal OAuth2User principal) throws URISyntaxException {
		if (principal == null) {
			return new ResponseEntity<>("", HttpStatus.OK);
		} else {
			log.info("We have princ: {}", principal.getAttributes().toString());

	        Map<String, Object> details = principal.getAttributes();
	        String userOauthId = details.get("sub").toString();
	 
	        Optional<User> user = userRepository.findByOauthId(userOauthId);
	        
	        // TODO AG. ok for now but need to generate keys on it's own. This is not thread safe.
	        Integer nextId = userRepository.findTopByOrderByIdDesc().getId() + 1;
	        
			ServiceProvider sp = (ServiceProvider) user.orElse(new ServiceProvider(
					nextId,
					userOauthId,
					details.get("given_name").toString(),
					details.get("family_name").toString(),
					details.get("preferred_username").toString(),
					"secret"
			));
			userRepository.save(sp);
			
			return ResponseEntity.ok().body(principal.getAttributes());
		}
	}

	@PostMapping("/api/logout")
	public ResponseEntity<?> logout(HttpServletRequest request,
			@AuthenticationPrincipal(expression = "idToken") OidcIdToken idToken) {
		// send logout URL to client so they can initiate logout
		String logoutUrl = this.registration.getProviderDetails().getConfigurationMetadata().get("end_session_endpoint").toString();

		Map<String, String> logoutDetails = new HashMap<>();
		logoutDetails.put("logoutUrl", logoutUrl);
		logoutDetails.put("idToken", idToken.getTokenValue());
		request.getSession(false).invalidate();
		return ResponseEntity.ok().body(logoutDetails);
	}
}