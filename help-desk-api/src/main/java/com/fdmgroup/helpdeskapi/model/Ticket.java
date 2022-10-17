package com.fdmgroup.helpdeskapi.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.AccessLevel;
import lombok.Data;
import lombok.Setter;

@Data
@Entity
public class Ticket {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Setter(AccessLevel.NONE)
	@Column(name = "ticket_id")
	private long id;

	@Column(name = "title", nullable = false)
	private String title;

	@OneToMany(cascade = CascadeType.ALL)
	private List<Message> messages;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public void addMessage(Message message) {
		messages.add(message);
	}

	public void removeMessage(Message message) {
		messages.remove(message);
	}

	public List<Message> getMessages() {
		return messages;
	}

	public void setMessages(List<Message> messages) {
		this.messages = messages;
	}

	public long getId() {
		return id;
	}

}
