package com.fdmgroup.helpdeskapi.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fdmgroup.helpdeskapi.model.Message;
import com.fdmgroup.helpdeskapi.repository.MessageRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class MessageServiceImp implements MessageService {

    MessageRepository messageRepository;

    @Override
    public Message saveMessage(Message message) {
        return messageRepository.save(message);
    }

    @Override
    public List<Message> findAllMessages() {
        return messageRepository.findAll();
    }

    @Override
    public Message findMessageById(long id) {
        return messageRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteMessageById(long id) {
        messageRepository.deleteById(id);
    }

}
