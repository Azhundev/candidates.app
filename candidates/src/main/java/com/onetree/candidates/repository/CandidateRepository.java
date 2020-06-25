package com.onetree.candidates.repository;

import com.onetree.candidates.model.Candidate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CandidateRepository extends JpaRepository<Candidate, Long> {

    Candidate getById(Long id);
}

