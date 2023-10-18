import { CalendarIcon, CaptureIcon, CloudIcon, CursorIcon, IosIcon, LockIcon, TargetIcon, WindowIcon } from "@/components/Icons/FeatureIcons";



export const features = [
    {
        id:1,
        title:'Build for speed',
        description:'Instantly sync your notes across devices',
        icon:CloudIcon()
    },
    {
        id:2,
        title:'Networked notes',
        description:'Form a graph of ideas with backlinked notes',
        icon:TargetIcon()
    },
    {
        id:3,
        title:'iOS app',
        description:'Capture ideas on the go, online or offline',
        icon:IosIcon()
    },
    {
        id:4,
        title:'End-to-end encryption',
        description:'Only you can access your notes',
        icon:LockIcon()
    },
    {
        id:5,
        title:'Calendar integration',
        description:'Keep track of meetings and agendas',
        icon:CalendarIcon()
    },
    {
        id:6,
        title:'Publishing',
        description:'Share anything you write with one click',
        icon:CursorIcon()
    },
    {
        id:7,
        title:'Instant capture',
        description:'Save snippets from your browser and Kindle',
        icon:CaptureIcon()
    },
    {
        id:8,
        title:'Frictionless search',
        description:'Easily recall and index past notes and ideas',
        icon:WindowIcon()
    },
]