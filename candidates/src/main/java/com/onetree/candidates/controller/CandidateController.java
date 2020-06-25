package com.onetree.candidates.controller;

import com.onetree.candidates.model.Candidate;
import com.onetree.candidates.service.CandidateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("api/board")
@CrossOrigin
public class CandidateController {

    @Autowired
    private CandidateService candidateService;

    @PostMapping("")
    public ResponseEntity<?> addCandToBoard(@Valid @RequestBody Candidate candidate, BindingResult result) {

        if (result.hasErrors()) {
            Map<String, String> errorMap = new HashMap<>();

            for (FieldError error: result.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }

            return new ResponseEntity<Map<String, String >>(errorMap, HttpStatus.BAD_REQUEST);
        }

        Candidate newCandidate = candidateService.saveOrUpdateCandidate(candidate);

        return new ResponseEntity<Candidate>(newCandidate, HttpStatus.CREATED);
    }

    @PutMapping("/{cand_id}")
    public ResponseEntity updateCandById(@PathVariable Long cand_id) {
        Candidate candidate = candidateService.findById(cand_id);

        candidateService.saveOrUpdateCandidate(candidate);

        return new ResponseEntity<>("Candidate updated", HttpStatus.OK);
    }

    @GetMapping("/all")
    public Iterable<Candidate> getAllCand() {
    return candidateService.findAll();
    }

    @GetMapping("/{cand_id}")
    public ResponseEntity getCandById(@PathVariable Long cand_id) {
    Candidate candidate = candidateService.findById(cand_id);
    return new ResponseEntity<Candidate>(candidate, HttpStatus.OK);
    }

    @DeleteMapping("{cand_id}")
    public ResponseEntity<?> deleteCandidate(@PathVariable Long cand_id) {

    candidateService.delete(cand_id);

    return new ResponseEntity<>("Candidate deleted", HttpStatus.OK);
    }
}

