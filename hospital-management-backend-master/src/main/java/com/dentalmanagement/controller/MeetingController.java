package com.dentalmanagement.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/meeting")
public class MeetingController {

    @GetMapping("/generate")
    public ResponseEntity<String> generateMeetingUrl(@RequestParam String doctorId, @RequestParam String patientId) {
        String baseUrl = "https://meet.jit.si/";
        String meetingId = "hospital-" + doctorId + "-" + patientId;
        String fullUrl = baseUrl + meetingId;

        return ResponseEntity.ok(fullUrl);
    }
}
