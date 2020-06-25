package com.onetree.candidates.service;

import com.onetree.candidates.model.Candidate;
import com.onetree.candidates.repository.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CandidateService {

    @Autowired
    private CandidateRepository candidateRepository;

    public Candidate saveOrUpdateCandidate(Candidate candidate) {
    return candidateRepository.save(candidate);
    }

    public Iterable<Candidate> findAll() {
    return candidateRepository.findAll();
    }

    public Candidate findById(Long id) {
    return candidateRepository.getById(id);
    }

    public void delete(Long id) {
    Candidate candidate =findById(id);
    candidateRepository.delete(candidate);
    }

}
