package com.onetree.candidates.model;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
public class Candidate extends BaseEntity{

    private String name;

    private String surname;

    private int yearsOfExp;

    private Date dateOfApp;

    private String position;

    private String avatar;
}
