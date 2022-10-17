package com.fdmgroup.helpdeskapi.controller;

import static org.mockito.Mockito.verify;
import static org.mockito.BDDMockito.given;

import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.fdmgroup.helpdeskapi.model.Message;
import com.fdmgroup.helpdeskapi.service.MessageService;

@ExtendWith(MockitoExtension.class)
public class MessageControllerTest {

    @Mock
    private MessageService messageService;

    @InjectMocks
    MessageController messageController;

    Message message1, message2;

    List<Message> messages;

    @BeforeEach
    void setUp() throws Exception {
        message1 = new Message();
        message1.setText("Test Message 1");

        message2 = new Message();
        message2.setText("Test Message 2");

        messages = List.of(message1, message2);
    }

    @Test
    void testDeleteMessageById() {
        given(messageService.findMessageById(1)).willReturn(message1);
        messageController.deleteMessageById(1);
        verify(messageService).findMessageById(1);
        verify(messageService).deleteMessageById(1);
    }

    @Test
    void testFindAllMessages() {
        messageController.findAllMessages();
        verify(messageService).findAllMessages();
    }

    @Test
    void testFindMessageById() {
        messageController.findMessageById(1);
        verify(messageService).findMessageById(1);
    }

    @Test
    void testSaveMessage() {
        messageController.saveMessage(message1);
        verify(messageService).saveMessage(message1);
    }

    @Test
    void testUpdateMessage() {
        long id = message1.getId();
        given(messageService.findMessageById(id)).willReturn(message1);
        messageController.updateMessage(message1);
        verify(messageService).findMessageById(id);
        verify(messageService).saveMessage(message1);
    }
}
