import React, { Component } from 'react';
import DoctorCard from '../component/DoctorCard';

const doctordata = [
    {
        "id": 1,
        "name": "Dr. John Smith",
        "degree": "MD, PhD",
        "about": "Dr. John Smith is a highly experienced rheumatologist with over 20 years of experience. He specializes in treating patients with rheumatoid arthritis, osteoarthritis, and other autoimmune diseases.",
        "fees": 150
    },
    {
        "id": 2,
        "name": "Dr. Emily Johnson",
        "degree": "MBBS",
        "about": "Dr. Emily Johnson is a dedicated general practitioner with a passion for preventive medicine. She focuses on promoting healthy lifestyles and disease prevention.",
        "fees": 100
    },
    {
        "id": 3,
        "name": "Dr. Michael Brown",
        "degree": "DDS",
        "about": "Dr. Michael Brown is an experienced dentist known for his gentle approach and commitment to patient care. He provides a wide range of dental services, including cleanings, fillings, and extractions.",
        "fees": 120
    },
    {
        "id": 4,
        "name": "Dr. Sarah Martinez",
        "degree": "DO",
        "about": "Dr. Sarah Martinez is a skilled osteopathic physician specializing in sports medicine. She helps athletes of all levels recover from injuries and improve their performance through personalized treatment plans.",
        "fees": 130
    },
    {
        "id": 5,
        "name": "Dr. David Wilson",
        "degree": "PharmD",
        "about": "Dr. David Wilson is a clinical pharmacist with expertise in medication therapy management. He works closely with patients and healthcare providers to optimize medication regimens and improve health outcomes.",
        "fees": 90
    },
    {
        "id": 6,
        "name": "Dr. Jennifer Lee",
        "degree": "PsyD",
        "about": "Dr. Jennifer Lee is a licensed psychologist specializing in cognitive-behavioral therapy (CBT). She helps individuals overcome anxiety, depression, and other mental health challenges using evidence-based techniques.",
        "fees": 140
    },
    {
        "id": 7,
        "name": "Dr. Robert Garcia",
        "degree": "DVM",
        "about": "Dr. Robert Garcia is a compassionate veterinarian dedicated to providing high-quality care for pets. He offers comprehensive medical services, including preventive care, diagnostics, and surgery.",
        "fees": 110
    },
    {
        "id": 8,
        "name": "Dr. Laura Thompson",
        "degree": "PhD",
        "about": "Dr. Laura Thompson is a research scientist specializing in cancer biology. She conducts cutting-edge research to better understand the mechanisms of cancer development and identify potential therapeutic targets.",
        "fees": 160
    },
    {
        "id": 9,
        "name": "Dr. William Clark",
        "degree": "MD",
        "about": "Dr. William Clark is a board-certified cardiologist with expertise in interventional cardiology. He provides comprehensive care for patients with heart conditions, including coronary artery disease and heart failure.",
        "fees": 170
    },
    {
        "id": 10,
        "name": "Dr. Sophia Patel",
        "degree": "DDS, MS",
        "about": "Dr. Sophia Patel is a specialist orthodontist with advanced training in orthodontics and dentofacial orthopedics. She is dedicated to helping patients achieve beautiful, healthy smiles through personalized orthodontic treatment.",
        "fees": 180
    }
]

class Doctor extends Component {
    render() {
        return (
            <>
                {
                doctordata.map((doctor) => (
                    <DoctorCard key={doctor.id} data={doctor} />
                  
                ))
                }
            </>
        );
    }
}

export default Doctor;