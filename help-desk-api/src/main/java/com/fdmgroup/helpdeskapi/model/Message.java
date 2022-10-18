package com.fdmgroup.helpdeskapi.model;

import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.PrePersist;

import lombok.AccessLevel;
import lombok.Setter;

@Entity
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Setter(AccessLevel.NONE)
    @Column(name = "message_id")
    private long id;

    @Column(name = "body")
    private String body;

    @Column(name = "date_created", nullable = false)
    private LocalDateTime dateCreated;

    @OneToOne(cascade = CascadeType.ALL)
    private User user;

    @PrePersist
    private void prePersist() {
        dateCreated = LocalDateTime.now();
    }

    public void setDateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
    }

    public LocalDateTime getDateCreated() {
        return dateCreated;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public long getId() {
        return id;
    }

    public String getText() {
        return body;
    }

    public void setText(String text) {
        this.body = text;
    }

}
