import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTshirt,
    faSeedling,
    faFemale,
    faPersonBooth,
    faRulerCombined,
    faFingerprint,
    faParking,
    faDollarSign,
    faHourglassHalf,
} from "@fortawesome/free-solid-svg-icons";

import quality from "../../assets/service_quality.jpg";
import price from "../../assets/service_price.jpg";
import mend from "../../assets/service_mend.jpg";
import accuracy from "../../assets/service_accuracy.jpg";

export const serviceData = [{
        subject: "Quality",
        description: "We promise to always provide good quality and that's our pride",
        image: quality,
    },
    {
        subject: "Price",
        description: "We have kept the tradition by offering lower prices than other laundries",
        image: price,
    },
    {
        subject: "Mend",
        description: "We will mend all clothes except those that are not allowed",
        image: mend,
    },
    {
        subject: "Accuracy",
        description: "When picking up clothes, we process the schedule accurately and quickly",
        image: accuracy,
    },
];

export const data = [{
        subject: "Are there any clothes that other laundry won't accept?",
        description: "We wash all kinds of clothes brought by customers. We wash any complex, sensitive, and tough clothes. Don't throw away your favorite clothes, leave them to us. There is nothing we cannot do. If you have any questions about the clothes to be washed, please email us.",
        icon: < FontAwesomeIcon icon = { faTshirt }
        />,
    },
    {
        subject: "You left your clothes at another laundry, but did the damage accumulate on your clothes?",
        description: "We use Organic Cleaning to avoid damaging clothes. Organic laundry helps prevent damage build-up when washing clothes. This is a benefit of using our laundry, so we do not ask for any additional fees. Use our laundry to keep your clothes cleaner and longer.",
        icon: < FontAwesomeIcon icon = { faSeedling }
        />,
    },
    {
        subject: "Are you going to an important place?",
        description: "Gorgeous wedding dresses are no problem! Many laundries are reluctant to wash wedding dresses. We will clean complex wedding dresses. Keep your beautiful wedding dress clean.",
        icon: < FontAwesomeIcon icon = { faFemale }
        />,
    },
    {
        subject: "Tired of washing large sizes at home?",
        description: "We clean large sizes such as curtains and duvets. We do laundry in large sizes quickly. In addition, if you would like to wash several large sizes at once, please contact us by e-mail. We will let you know how long it will take to wash.",
        icon: < FontAwesomeIcon icon = { faPersonBooth }
        />,
    },
    {
        subject: "Are your clothes the wrong size or torned?",
        description: "We can alterat all kinds of clothes. With advanced techniques, we will restore the clothes to their original appearance or alterat the size. Proper shape and clean clothes leave an impression on others.",
        icon: < FontAwesomeIcon icon = { faRulerCombined }
        />,
    },
    {
        subject: "Do you have an indelible stain?",
        description: "We cleanly remove stains from clothes. Don't buy new clothes, trust our laundry. We make dirty clothes look like new clothes.",
        icon: < FontAwesomeIcon icon = { faFingerprint }
        />,
    },
    {
        subject: "Are you looking for services for parking and drive-thru?",
        description: "Don't worry, we have a parking lot provided and drive through is also provided during open hours. We are working hard to make our customers feel comfortable when using our facilities.",
        icon: < FontAwesomeIcon icon = { faParking }
        />,
    },
    {
        subject: "Are you looking for a laundry with good value for money?",
        description: "We pride ourselves on alterat and laundry at affordable prices. We offer you a cheaper price than other stores and despite the low price, we provide good quality. If you have any questions about pricing, please email us.",
        icon: < FontAwesomeIcon icon = { faDollarSign }
        />,
    },
    {
        subject: "Our time and yours are gold",
        description: "Your time is very precious. So, we guarantee to provide our guests with prompt and friendly service. We will continue to improve so that customers are satisfied with our service.",
        icon: < FontAwesomeIcon icon = { faHourglassHalf }
        />,
    },
];