package com.fdmgroup.helpdeskapi.controller;

import static org.mockito.Mockito.verify;
import static org.mockito.BDDMockito.given;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.fdmgroup.helpdeskapi.model.Message;
import com.fdmgroup.helpdeskapi.model.Ticket;
import com.fdmgroup.helpdeskapi.service.MessageService;
import com.fdmgroup.helpdeskapi.service.TicketService;

@ExtendWith(MockitoExtension.class)
public class TicketControllerTest {

    @Mock
    private TicketService ticketService;

    @Mock
    private MessageService messageService;

    @InjectMocks
    TicketController ticketController;

    Ticket ticket1, ticket2;

    Message message1, message2;

    List<Ticket> tickets;

    @BeforeEach
    void setUp() throws Exception {
        ticket1 = new Ticket();
        ticket1.setTitle("Test Ticket 1");

        ticket2 = new Ticket();
        ticket2.setTitle("Test Ticket 2");

        message1 = new Message();
        message1.setText("Test Message 1");

        message2 = new Message();
        message2.setText("Test Message 2");

        tickets = List.of(ticket1, ticket2);
    }

    @Test
    void testDeleteTicketById() {
        given(ticketService.findTicketById(1)).willReturn(ticket1);
        ticketController.deleteTicketById(1);
        verify(ticketService).findTicketById(1);
        verify(ticketService).deleteTicketById(1);
    }

    @Test
    void testFindAllTickets() {
        ticketController.findAllTickets();
        verify(ticketService).findAllTickets();
    }

    @Test
    void testFindTicketById() {
        ticketController.findTicketById(1);
        verify(ticketService).findTicketById(1);
    }

    @Test
    void testSaveTicket() {
        ticketController.saveTicket(ticket1);
        verify(ticketService).saveTicket(ticket1);
    }

    @Test
    void testUpdateTicket() {
        ticketController.saveTicket(ticket1);
        verify(ticketService).saveTicket(ticket1);
    }
}
