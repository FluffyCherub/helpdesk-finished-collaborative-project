package com.fdmgroup.helpdeskapi.controller;

import java.util.List;

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

import com.fdmgroup.helpdeskapi.model.Ticket;
import com.fdmgroup.helpdeskapi.service.TicketService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController
@RequestMapping("/api/v1/tickets")
public class TicketController {

    private TicketService ticketService;

    public TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    @Operation(summary = "Save a ticket")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Ticket created"),
    })
    @PostMapping
    public ResponseEntity<?> saveTicket(@RequestBody Ticket ticket) {
        return new ResponseEntity<>(ticketService.saveTicket(ticket), HttpStatus.CREATED);
    }

    @Operation(summary = "Find all tickets")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Tickets found"),
    })
    @GetMapping
    public ResponseEntity<?> findAllTickets() {
        List<Ticket> tickets = ticketService.findAllTickets();
        return new ResponseEntity<>(tickets, HttpStatus.OK);
    }

    @Operation(summary = "Find an ticket by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Ticket found"),
            @ApiResponse(responseCode = "404", description = "Ticket not found"),
    })
    @PutMapping
    public ResponseEntity<?> updateTicket(@RequestBody Ticket ticket) {
        if (ticketService.findTicketById(ticket.getId()) != null) {
            return new ResponseEntity<>(ticketService.saveTicket(ticket), HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Ticket not found", HttpStatus.NOT_FOUND);
        }
    }

    @Operation(summary = "Find a ticket by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Ticket found"),
            @ApiResponse(responseCode = "404", description = "Ticket not found"),
    })
    @GetMapping("/{id}")
    public ResponseEntity<?> findTicketById(@PathVariable long id) {
        if (ticketService.findTicketById(id) != null) {
            return new ResponseEntity<>(ticketService.findTicketById(id), HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Ticket not found", HttpStatus.NOT_FOUND);
        }
    }

    @Operation(summary = "Delete a ticket by id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Ticket deleted"),
            @ApiResponse(responseCode = "404", description = "Ticket not found"),
    })
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTicketById(@PathVariable long id) {
        if (ticketService.findTicketById(id) != null) {
            ticketService.deleteTicketById(id);
            return new ResponseEntity<>("Ticket deleted", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Ticket not found", HttpStatus.NOT_FOUND);
        }
    }

}
