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

import com.fdmgroup.feignclient.request.TicketRequestService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/gateway/tickets")
@AllArgsConstructor
public class TicketRequestController {

    private TicketRequestService ticketRequestService;

    @PostMapping
    ResponseEntity<?> saveTicket(@RequestBody Object ticket) {
        return new ResponseEntity<>(ticketRequestService.saveTicket(ticket), HttpStatus.CREATED);
    };

    @GetMapping
    ResponseEntity<?> findAllTickets() {
        return new ResponseEntity<>(ticketRequestService.findAllTickets(), HttpStatus.OK);
    };

    @GetMapping("/unassigned")
    ResponseEntity<?> findAllUnassignedTickets() {
        return new ResponseEntity<>(ticketRequestService.findAllUnassignedTickets(), HttpStatus.OK);
    };

    @PutMapping
    ResponseEntity<?> updateTicket(@RequestBody Object ticket) {
        return new ResponseEntity<>(ticketRequestService.updateTicket(ticket), HttpStatus.OK);
    };

    @GetMapping("/{id}")
    ResponseEntity<?> findTicketById(@PathVariable long id) {
        return new ResponseEntity<>(ticketRequestService.findTicketById(id), HttpStatus.OK);
    };

    @DeleteMapping("/{id}")
    ResponseEntity<?> deleteTicketById(@PathVariable long id) {
        ticketRequestService.deleteTicketById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    };

    @GetMapping("/engineer/{id}")
    ResponseEntity<?> findTicketsByEngineerId(@PathVariable Long id) {
        return new ResponseEntity<>(ticketRequestService.findTicketsByEngineerId(id), HttpStatus.OK);
    }

    @GetMapping("/client/{id}")
    ResponseEntity<?> findTicketsByClientId(@PathVariable Long id) {
        return new ResponseEntity<>(ticketRequestService.findTicketsByClientId(id), HttpStatus.OK);
    }

    @GetMapping("/resolve/{id}")
    public ResponseEntity<?> resolveTicketById(@PathVariable Long id) {
        return new ResponseEntity<>(ticketRequestService.resolveTicketById(id), HttpStatus.OK);
    }

    @GetMapping("/reopen/{id}")
    public ResponseEntity<?> reopenTicketById(@PathVariable Long id) {
        return new ResponseEntity<>(ticketRequestService.reopenTicketById(id), HttpStatus.OK);
    }

    @PutMapping("/addMessage/{ticketId}")
    public ResponseEntity<?> addMessageToTicketByTicketId(@PathVariable long ticketId, @RequestBody Object message) {
        return new ResponseEntity<>(ticketRequestService.addMessageToTicketByTicketId(ticketId, message),
                HttpStatus.OK);
    }

    @DeleteMapping("/deleteMessage/{ticketId}/{messageId}")
    public ResponseEntity<?> deleteMessageByTicketIdAndMessageId(@PathVariable long ticketId,
            @PathVariable long messageId) {
        return new ResponseEntity<>(ticketRequestService.deleteMessageByTicketIdAndMessageId(ticketId, messageId),
                HttpStatus.OK);
    }

}
