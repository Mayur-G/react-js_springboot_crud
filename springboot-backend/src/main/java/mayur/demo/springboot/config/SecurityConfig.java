package mayur.demo.springboot.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;


// *************  NOT WORKING ***************
//  Its Kinda working  http://localhost:8080/login , username mayur password password

@Configuration
@EnableMethodSecurity
@EnableWebSecurity
public class SecurityConfig {

//	@Autowired
//	UserDetailsService userDetailsService;
	
	@Bean
	public PasswordEncoder passwordEncoder()
	{
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	public UserDetailsService userDetailsService()
	{
		UserDetails normalUser = User.withUsername("mayur")
				.password(passwordEncoder().encode("password"))
				.roles("NORMAL")
				.build();
		
		UserDetails adminUser = User.withUsername("admin")
				.password(passwordEncoder().encode("password"))
				.roles("ADMIN")
				.build();
		
		return new InMemoryUserDetailsManager(normalUser,adminUser);
	}
	
//	@Bean
//	public AuthenticationProvider authenticationProvider()
//	{
//		DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
//		provider.setUserDetailsService(userDetailsService);
//		provider.setPasswordEncoder(new BCryptPasswordEncoder());
//		return provider;
//	}
	 
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception 
	{
		
		//http.cors().and().csrf().disable()
		
		http.csrf((csrf) -> csrf.disable())
        .cors(cors -> {
            cors.configurationSource(corsConfigurationSource());
        })
		.authorizeHttpRequests()
		.requestMatchers("/**")
//		.requestMatchers("/public")
		.permitAll()                     
		.anyRequest()                     
		.authenticated().and()
		.formLogin();
		
		return http.build();
	}
	
	 @Bean
	    CorsConfigurationSource corsConfigurationSource() {
//	        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//	        source.registerCorsConfiguration("/**", new CorsConfiguration().applyPermitDefaultValues());
	      
		    CorsConfiguration configuration = new CorsConfiguration();
		    configuration.addAllowedOrigin("http://localhost:3000"); 
		    configuration.addAllowedMethod("*"); 
		    configuration.addAllowedHeader("*"); 
		    configuration.setAllowCredentials(true);
		    UrlBasedCorsConfigurationSource source = new 
		    UrlBasedCorsConfigurationSource();
		    source.registerCorsConfiguration("/**", configuration);
		 return source;
	    }
	
	
}