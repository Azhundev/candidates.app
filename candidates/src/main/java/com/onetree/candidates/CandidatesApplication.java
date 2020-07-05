package com.onetree.candidates;

import com.onetree.candidates.config.StorageProperties;
import com.onetree.candidates.model.Role;
import com.onetree.candidates.model.User;
import com.onetree.candidates.repository.StorageService;
import com.onetree.candidates.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Arrays;

@SpringBootApplication
@EnableConfigurationProperties(StorageProperties.class)
public class CandidatesApplication {

	@Bean
	public CommandLineRunner setupDefaultUser(UserService service) {
		return args -> service.saveOrUpdateUser(new User(
				"azhun@azhundev.com",
				"azhun",
				Arrays.asList(new Role("ADMIN")), //ROLES
				true //active
		));
	}

	@Bean
	CommandLineRunner init(StorageService storageService) {
		return (args) -> {
			storageService.deleteAll();
			storageService.init();
		};
	}

	@Bean
	public PasswordEncoder getPasswordEncoder() { return new BCryptPasswordEncoder(); }

	public static void main(String[] args) {
		SpringApplication.run(CandidatesApplication.class, args);
	}

}
