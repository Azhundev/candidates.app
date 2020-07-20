package com.onetree.candidates.model;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Collection;
import java.util.List;

@AllArgsConstructor
@Getter
public class AuthenticationResponse {

    private String jwt;
    private String username;
    private Collection authorities;
}

