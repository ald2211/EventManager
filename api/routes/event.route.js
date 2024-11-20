import express from 'express';
import {addEvent, deleteEvent, getEvents, updateEvent,getEvent } from '../controllers/event.controller.js';
import verifyUser from '../utils/verify.js';


const router= express.Router()

// get all events route
router.get('/',verifyUser,getEvents)

// create new event route
router.post('/', verifyUser, addEvent);

// update event route
router.put('/:id', verifyUser, updateEvent);

// delete event route
router.delete('/:id', verifyUser, deleteEvent);

//get single event
router.get('/:id',verifyUser,getEvent)


export default router