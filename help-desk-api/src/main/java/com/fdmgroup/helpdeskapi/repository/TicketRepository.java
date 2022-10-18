package com.fdmgroup.helpdeskapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fdmgroup.helpdeskapi.model.Ticket;

public interface TicketRepository extends JpaRepository<Ticket, Long> {

    List<Ticket> findTicketsByEngineerId(Long id);

}
