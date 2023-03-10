package com.fdmgroup.helpdeskapi.controller;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;

import java.io.IOException;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.json.JacksonTester;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fdmgroup.helpdeskapi.model.Client;
import com.fdmgroup.helpdeskapi.model.Message;
import com.fdmgroup.helpdeskapi.model.Ticket;
import com.fdmgroup.helpdeskapi.service.MessageService;
import com.fdmgroup.helpdeskapi.service.TicketService;
import com.fdmgroup.helpdeskapi.service.UserService;

@ExtendWith(MockitoExtension.class)
public class TicketControllerTest {

    @Mock
    private UserService userService;

    @Mock
    private TicketService ticketService;

    @Mock
    private MessageService messageService;

    @InjectMocks
    TicketController ticketController;

    private MockMvc mockMvc;

    Ticket ticket1, ticket2, ticket3;

    Message message1, message2;

    Client client1;

    List<Ticket> tickets, unassignedTickets;

    private JacksonTester<Ticket> jsonTicket;

    @BeforeEach
    void setUp() throws Exception {
        JacksonTester.initFields(this, new ObjectMapper());

        mockMvc = MockMvcBuilders.standaloneSetup(ticketController).build();

        client1 = new Client();
        client1.setFullName("Joe Bloggs");
        client1.setEmail("joe@msn");
        client1.setUsername("JBloggs");
        client1.setPassword("password");

        ticket1 = new Ticket();
        ticket1.setTitle("Test Ticket 1");
        ticket1.setResolved(false);
        ticket1.setClientId(1L);

        ticket2 = new Ticket();
        ticket2.setTitle("Test Ticket 2");
        ticket2.setResolved(false);
        ticket2.setClientId(1L);

        ticket3 = new Ticket();
        ticket3.setTitle("Test Ticket 3");
        ticket3.setResolved(false);
        ticket3.setClientId(1L);
        ticket3.setEngineerId(1L);

        message1 = new Message();
        message1.setBody("Test Message 1");

        message2 = new Message();
        message2.setBody("Test Message 2");

        tickets = List.of(ticket1, ticket2, ticket3);
        unassignedTickets = List.of(ticket1, ticket2);
    }

    @Test
    void testDeleteTicketById() {
        // given
        given(ticketService.findTicketById(1)).willReturn(ticket1);
        // when
        ticketController.deleteTicketById(1L);
        // then
        verify(ticketService).findTicketById(1);
        verify(ticketService).deleteTicketById(1);
    }

    @Test
    void testFindAllTickets() throws Exception {
        // given
        given(ticketService.findAllTickets()).willReturn(tickets);
        // when
        MockHttpServletResponse response = mockMvc.perform(get("/api/v1/tickets/")).andReturn().getResponse();
        // then
        assertThat(response.getStatus()).isEqualTo(HttpStatus.OK.value());
        for (Ticket ticket : tickets) {
            assertThat(response.getContentAsString()).contains(ticket.getTitle());
        }
        verify(ticketService, times(1)).findAllTickets();
    }

    @Test
    void testFindAllUnassignedTickets() throws Exception {
        // given
        given(ticketService.findAllUnassignedTickets()).willReturn(unassignedTickets);
        // when
        MockHttpServletResponse response = mockMvc.perform(get("/api/v1/tickets/unassigned")).andReturn().getResponse();
        // then
        assertThat(response.getStatus()).isEqualTo(HttpStatus.OK.value());
        for (Ticket ticket : unassignedTickets) {
            assertThat(response.getContentAsString()).contains(ticket.getTitle());
        }
        verify(ticketService, times(1)).findAllUnassignedTickets();
    }

    @Test
    void testFindTicketById() throws Exception {
        // given
        given(ticketService.findTicketById(1)).willReturn(ticket1);
        // when
        MockHttpServletResponse response = mockMvc.perform(get("/api/v1/tickets/1")).andReturn().getResponse();
        // then
        assertThat(response.getStatus()).isEqualTo(HttpStatus.OK.value());
        assertThat(response.getContentAsString()).isEqualTo(jsonTicket.write(ticket1).getJson());
        verify(ticketService, times(2)).findTicketById(1);
    }

    @Test
    void testSaveTicket() throws IOException, Exception {
        // given
        given(ticketService.saveTicket(ticket1)).willReturn(ticket1);
        // when
        MockHttpServletResponse response = mockMvc
                .perform(post("/api/v1/tickets/").contentType(MediaType.APPLICATION_JSON).content(
                        jsonTicket.write(ticket1).getJson()))
                .andReturn().getResponse();
        // then
        assertThat(response.getStatus()).isEqualTo(HttpStatus.CREATED.value());
        verify(ticketService).saveTicket(ticket1);
    }

    @Test
    void testUpdateTicket() throws IOException, Exception {
        // given
        given(ticketService.saveTicket(ticket1)).willReturn(ticket1);
        given(ticketService.findTicketById(ticket1.getId())).willReturn(ticket1);
        // when
        MockHttpServletResponse response = mockMvc
                .perform(put("/api/v1/tickets/").contentType(MediaType.APPLICATION_JSON).content(
                        jsonTicket.write(ticket1).getJson()))
                .andReturn().getResponse();
        // then
        assertThat(response.getStatus()).isEqualTo(HttpStatus.OK.value());
        verify(ticketService).findTicketById(ticket1.getId());
        verify(ticketService).saveTicket(ticket1);
    }
}
