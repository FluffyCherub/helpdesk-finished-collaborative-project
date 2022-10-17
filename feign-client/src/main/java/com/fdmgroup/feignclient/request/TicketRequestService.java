package com.fdmgroup.feignclient.request;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(value = "ticket-service", path = "/api/v1/tickets", url = "${helpdeskapi.server.url}")
public interface TicketRequestService {

    @PostMapping
    Object saveTicket(@RequestBody Object ticket);

    @GetMapping
    List<Object> findAllTickets();

    @PutMapping
    Object updateTicket(Object ticket);

    @GetMapping("/{id}")
    Object findTicketById(@PathVariable long id);

    @DeleteMapping("/{id}")
    void deleteTicketById(@PathVariable long id);
}