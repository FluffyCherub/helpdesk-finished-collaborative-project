package com.fdmgroup.helpdeskapi.service;

import java.util.List;

import com.fdmgroup.helpdeskapi.model.Ticket;
import com.fdmgroup.helpdeskapi.repository.TicketRepository;

public class TicketServiceImp implements TicketService {

    TicketRepository ticketRepository;

    @Override
    public Ticket saveTicket(Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    @Override
    public List<Ticket> findAllTickets() {
        return ticketRepository.findAll();
    }

    @Override
    public Ticket findTicketById(long id) {
        return ticketRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteTicketById(long id) {
        ticketRepository.deleteById(id);
    }

}
