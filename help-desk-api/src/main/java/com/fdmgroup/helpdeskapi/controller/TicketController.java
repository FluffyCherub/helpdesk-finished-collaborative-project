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

import com.fdmgroup.helpdeskapi.model.Message;
import com.fdmgroup.helpdeskapi.model.Ticket;
import com.fdmgroup.helpdeskapi.service.MessageService;
import com.fdmgroup.helpdeskapi.service.TicketService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController
@RequestMapping("/api/v1/tickets")
public class TicketController {

	private TicketService ticketService;
	private MessageService messageService;

	public TicketController(TicketService ticketService, MessageService messageService) {
		this.ticketService = ticketService;
		this.messageService = messageService;
	}

	@Operation(summary = "Save a ticket")
	@ApiResponses(value = { @ApiResponse(responseCode = "201", description = "Ticket created"), })
	@PostMapping
	public ResponseEntity<?> saveTicket(@RequestBody Ticket ticket) {
		return new ResponseEntity<>(ticketService.saveTicket(ticket), HttpStatus.CREATED);
	}

	@Operation(summary = "Find all tickets")
	@ApiResponses(value = { @ApiResponse(responseCode = "200", description = "Tickets found"), })
	@GetMapping
	public ResponseEntity<?> findAllTickets() {
		List<Ticket> tickets = ticketService.findAllTickets();
		return new ResponseEntity<>(tickets, HttpStatus.OK);
	}

	@Operation(summary = "Find all unassigned tickets")
	@ApiResponses(value = { @ApiResponse(responseCode = "200", description = "Tickets found"), })
	@GetMapping("/unassigned")
	public ResponseEntity<?> findAllUnassignedTickets() {
		List<Ticket> unassignedTickets = ticketService.findAllUnassignedTickets();
		return new ResponseEntity<>(unassignedTickets, HttpStatus.OK);
	}

	@Operation(summary = "Update a ticket")
	@ApiResponses(value = { @ApiResponse(responseCode = "200", description = "Ticket found"),
			@ApiResponse(responseCode = "404", description = "Ticket not found"), })
	@PutMapping
	public ResponseEntity<?> updateTicket(@RequestBody Ticket ticket) {
		if (ticketService.findTicketById(ticket.getId()) != null) {
			return new ResponseEntity<>(ticketService.saveTicket(ticket), HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Ticket not found", HttpStatus.NOT_FOUND);
		}
	}

	@Operation(summary = "Resolve a ticket by its id")
	@ApiResponses(value = { @ApiResponse(responseCode = "200", description = "Ticket resolved"),
			@ApiResponse(responseCode = "404", description = "Ticket not found"), })
	@GetMapping("/resolve/{id}")
	public ResponseEntity<?> resolveTicketById(@PathVariable Long id) {
		Ticket resolvedTicket = ticketService.findTicketById(id);
		if (resolvedTicket != null) {
			resolvedTicket.setResolved(true);
			return new ResponseEntity<>(ticketService.saveTicket(resolvedTicket), HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Ticket not found", HttpStatus.NOT_FOUND);
		}
	}

	@Operation(summary = "Re-open a ticket by its id")
	@ApiResponses(value = { @ApiResponse(responseCode = "200", description = "Ticket re-opened"),
			@ApiResponse(responseCode = "404", description = "Ticket not found"), })
	@GetMapping("/reopen/{id}")
	public ResponseEntity<?> reopenTicketById(@PathVariable Long id) {
		Ticket reopenedTicket = ticketService.findTicketById(id);
		if (reopenedTicket != null) {
			reopenedTicket.setResolved(false);
			return new ResponseEntity<>(ticketService.saveTicket(reopenedTicket), HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Ticket not found", HttpStatus.NOT_FOUND);
		}
	}

	@Operation(summary = "Assign a ticket to an engineer")
	@ApiResponses(value = { @ApiResponse(responseCode = "200", description = "Ticket assigned"),
			@ApiResponse(responseCode = "404", description = "Ticket not found"), })
	@GetMapping("/engineer/{engineerId}/addto/{ticketId}")
	public ResponseEntity<?> assignTicketEngineerById(@PathVariable Long engineerId, @PathVariable Long ticketId) {
		Ticket ticketToAssign = ticketService.findTicketById(ticketId);
		if (ticketToAssign != null) {
			ticketToAssign.setEngineerId(engineerId);
			return new ResponseEntity<>(ticketService.saveTicket(ticketToAssign), HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Ticket not found", HttpStatus.NOT_FOUND);
		}
	}

	@Operation(summary = "Find a ticket by id")
	@ApiResponses(value = { @ApiResponse(responseCode = "200", description = "Ticket found"),
			@ApiResponse(responseCode = "404", description = "Ticket not found"), })
	@GetMapping("/{id}")
	public ResponseEntity<?> findTicketById(@PathVariable long id) {
		if (ticketService.findTicketById(id) != null) {
			return new ResponseEntity<>(ticketService.findTicketById(id), HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Ticket not found", HttpStatus.NOT_FOUND);
		}
	}

	@Operation(summary = "Find tickets by engineer id")
	@ApiResponses(value = { @ApiResponse(responseCode = "200", description = "Tickets found"), })
	@GetMapping("/engineer/{id}")
	public ResponseEntity<?> findTicketsByEngineerId(@PathVariable Long id) {
		List<Ticket> tickets = ticketService.findTicketsByEngineerId(id);
		return new ResponseEntity<>(tickets, HttpStatus.OK);
	}

	@Operation(summary = "Find tickets by client id")
	@ApiResponses(value = { @ApiResponse(responseCode = "200", description = "Tickets found"), })
	@GetMapping("/client/{id}")
	public ResponseEntity<?> findTicketsByClientId(@PathVariable Long id) {
		List<Ticket> tickets = ticketService.findTicketsByClientId(id);
		return new ResponseEntity<>(tickets, HttpStatus.OK);
	}

	@Operation(summary = "Delete a ticket by id")
	@ApiResponses(value = { @ApiResponse(responseCode = "200", description = "Ticket deleted"),
			@ApiResponse(responseCode = "404", description = "Ticket not found"), })
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteTicketById(@PathVariable Long id) {
		if (ticketService.findTicketById(id) != null) {
			ticketService.deleteTicketById(id);
			return new ResponseEntity<>("Ticket deleted", HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Ticket not found", HttpStatus.NOT_FOUND);
		}
	}

	@Operation(summary = "Add a message to a ticket by ticket id")
	@ApiResponses(value = { @ApiResponse(responseCode = "200", description = "Ticket found"),
			@ApiResponse(responseCode = "404", description = "Ticket not found"), })
	@PutMapping("/addMessage/{ticketId}")
	public ResponseEntity<?> addMessageToTicketByTicketId(@PathVariable Long ticketId, @RequestBody Message message) {
		if (ticketService.findTicketById(ticketId) != null) {
			Ticket ticket = ticketService.findTicketById(ticketId);
			ticket.addMessage(message);
			ticketService.saveTicket(ticket);
			return new ResponseEntity<>(ticket, HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Ticket not found", HttpStatus.NOT_FOUND);
		}
	}

	@Operation(summary = "Delete a message from a ticket by ticket id and message id")
	@ApiResponses(value = { @ApiResponse(responseCode = "200", description = "Ticket and message found"),
			@ApiResponse(responseCode = "404", description = "Ticket or message id not found"), })
	@DeleteMapping("/deleteMessage/{ticketId}/{messageId}")
	public ResponseEntity<?> deleteMessageByTicketIdAndMessageId(@PathVariable Long ticketId,
			@PathVariable Long messageId) {
		if (ticketService.findTicketById(ticketId) != null && messageService.findMessageById(messageId) != null) {
			Ticket ticket = ticketService.findTicketById(ticketId);
			Message message = messageService.findMessageById(messageId);
			ticket.removeMessage(message);
			ticketService.saveTicket(ticket);
			return new ResponseEntity<>(ticket, HttpStatus.OK);
		} else {
			return new ResponseEntity<>("Ticket id or message id not found", HttpStatus.NOT_FOUND);
		}
	}

}
