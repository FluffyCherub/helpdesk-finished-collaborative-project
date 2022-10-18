package com.fdmgroup.feignclient.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fdmgroup.feignclient.request.MessageRequestService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/gateway/messages")
@AllArgsConstructor
public class MessageRequestController {

    private MessageRequestService messageRequestService;

    @PostMapping
    ResponseEntity<?> saveMessage(@RequestBody Object message) {
        return new ResponseEntity<>(messageRequestService.saveMessage(message), HttpStatus.CREATED);
    };

    @GetMapping
    ResponseEntity<?> findAllMessages() {
        return new ResponseEntity<>(messageRequestService.findAllMessages(), HttpStatus.OK);
    };

    @PutMapping
    ResponseEntity<?> updateMessage(@RequestBody Object message) {
        return new ResponseEntity<>(messageRequestService.updateMessage(message), HttpStatus.OK);
    };

    @GetMapping("/{id}")
    ResponseEntity<?> findMessageById(@PathVariable long id) {
        return new ResponseEntity<>(messageRequestService.findMessageById(id), HttpStatus.OK);
    };

    @DeleteMapping("/{id}")
    ResponseEntity<?> deleteMessageById(@PathVariable long id) {
        messageRequestService.deleteMessageById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    };
}
