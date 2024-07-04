"use client";
import UpcomingEventComponent from "./(upcoming-event)/upcoming-event.component";
import HeroSectionComponent from "./(hero-section)/hero-section.component";
import React, {useEffect, useState} from "react";
import SelectionProcessComponent from "./(selection-process)/selection-process.component";
import UnlockSucessReasonComponent from "./(unlock-success-reason-section)/unlock-success-reason.component";
import MediaCoverageComponent from "./(media-coverage)/media-coverage.component";
import ExcellenceAwardsComponent from "./(excellence-awards)/excellence-awards.component";
import UnlockOpportunitiesComponent from "./(unlock-opportunities)/unlock-opportunities.component";
import FaqSectionComponent from "./(faq-section)/faq-section.component";
import {getNextUpcomingEvent, getNextUpcomingEvents} from "@shared/services/event.service";
import {IEvent} from "@shared/data/event.data";

const HomePage = () => {
    const [upcomingEvent, setUpcomingEvent] = useState<IEvent | undefined>(undefined);
    const [upcomingEvents, setUpcomingEvents] = useState<Array<IEvent> | undefined>([]);

    useEffect(() => {
        getUpcomingEvent();
        getUpcomingEvents();
    }, []);

    const getUpcomingEvent = () => {
        setUpcomingEvent(getNextUpcomingEvent());
    };

    const getUpcomingEvents = () => {
        setUpcomingEvents(getNextUpcomingEvents());
    };
    return (
        <div>
            <HeroSectionComponent eventDetail={upcomingEvent as IEvent} eventDetails={upcomingEvents as IEvent[]}/>
            <UpcomingEventComponent eventDetail={upcomingEvent as IEvent} eventDetails={upcomingEvents as IEvent[]}/>
            <SelectionProcessComponent/>
            <UnlockOpportunitiesComponent/>
            <ExcellenceAwardsComponent/>
            <UnlockSucessReasonComponent/>
            <MediaCoverageComponent/>
            <FaqSectionComponent/>
        </div>
    );
};

export default HomePage;
