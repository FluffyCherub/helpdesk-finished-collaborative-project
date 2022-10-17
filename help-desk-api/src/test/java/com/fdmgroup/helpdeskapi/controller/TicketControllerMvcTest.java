package com.fdmgroup.helpdeskapi.controller;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import com.fdmgroup.helpdeskapi.model.Ticket;
import com.fdmgroup.helpdeskapi.repository.TicketRepository;
import com.fdmgroup.helpdeskapi.service.TicketService;

@SpringBootTest
@AutoConfigureMockMvc
public class TicketControllerMvcTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private TicketService ticketService;

    @Test
    void shouldCreateMockMvc() {
        assertThat(mockMvc).isNotNull();
    }

    @Test
    public void test_shouldReturnStatusOKWhenGet() throws Exception {

        this.mockMvc.perform(get("/")).andDo(print()).andExpect(status().isOk());
        // this.mockMvc.perform(get("/")).andDo(print()).andExpect(status().isOk())
        // .andExpect(content().string(containsString("Hello, World")));
    }

    @Test
    public void test_shouldReturnStatusCreatedWhenGet() throws Exception {

        this.mockMvc.perform(post("/")).andDo(print()).andExpect(status().isCreated());
        // this.mockMvc.perform(get("/")).andDo(print()).andExpect(status().isOk())
        // .andExpect(content().string(containsString("Hello, World")));
    }

    @Test
    public void test_shouldReturnStatus() throws Exception {

        this.mockMvc.perform(get("/")).andDo(print()).andExpect(status().isCreated());
        // this.mockMvc.perform(get("/")).andDo(print()).andExpect(status().isOk())
        // .andExpect(content().string(containsString("Hello, World")));

        // final List<Ticket> mockedTickets =
        // Stream.concat(TicketRepository.TICKETS.stream(), Stream.of(new Ticket()))
        // .collect(Collectors.toList());
    }

}
