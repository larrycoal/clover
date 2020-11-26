import React from "react";
import { Hero } from '../containers/Hero';
import { manUp, buildConfidence, supportUs } from "../containers/InfoHorizontal/data";
import { InfoHorizontal } from "../containers/InfoHorizontal";
import { InfoVertical } from "../containers/InfoVertical";
import { youMatter, mentalPain } from "../containers/InfoVertical/data";
import { JoinUs } from "../containers/JoinUs";
import { Faq } from "../containers/Faq";
import { Volunteer } from "../containers/Volunteer";

export const Home = () => {
    return (
        <main>
            <Hero />
            <InfoVertical {...youMatter} />
            <InfoHorizontal {...buildConfidence} />
            <InfoHorizontal {...manUp} imageStart />
            <JoinUs />
            <Faq />
            <InfoVertical {...mentalPain} imageStart/>
            <InfoHorizontal {...supportUs} />
            <Volunteer />
        </main>
    );
};