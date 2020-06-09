import { Social } from './social.interface'
import { ChangeLog } from './changeLog.interface'
import { Projects } from './projects.interface'

export interface Portfolio {
    firstName: string;
    lastName: string;
    subHeading: string;
    socialMedia: Social[];
    changeLog: ChangeLog[];
    projects: Projects[];
    speakerBio: string;
}