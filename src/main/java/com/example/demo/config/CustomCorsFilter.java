package com.example.demo.config;

import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;

public class CustomCorsFilter extends CorsFilter {

    public CustomCorsFilter() {
        super(configurationSource());
    }

    private static UrlBasedCorsConfigurationSource configurationSource() {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("*");
        config.addAllowedHeader("*");
        config.setMaxAge(36000L);
        config.setAllowedMethods(Arrays.asList("GET", "HEAD", "POST", "PUT", "DELETE", "OPTIONS"));

        CorsConfiguration configReg = new CorsConfiguration();
        configReg.setAllowCredentials(true);
        configReg.addAllowedOrigin("*");
        configReg.addAllowedHeader("*");
        configReg.setMaxAge(36000L);
        configReg.setAllowedMethods(Arrays.asList("GET", "HEAD", "POST", "PUT", "DELETE", "OPTIONS"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/api/**", config);
        source.registerCorsConfiguration("/req", configReg);
        source.registerCorsConfiguration("/email**", configReg);
        return source;
    }
}