package com.fdmgroup.helpdeskapi.service;

import java.util.List;

import com.fdmgroup.helpdeskapi.model.Ticket;

public interface TicketService {

    Object saveTicket(Ticket ticket);

    List<Ticket> findAllTickets();

    Object findTicketById(long id);

    void deleteTicketById(long id);

}
