import { configureStore } from '@reduxjs/toolkit'
import BasicInfoReducer from './slices/basicInfo'
import WorkExperienceReducer from './slices/workExperience'
import SkillsReducer from './slices/skills'
import ProjectsReducer from './slices/projects'
import EducationReducer from './slices/education'
import AchievementsReducer from './slices/achievements'
export const store = configureStore({
    reducer: {
        basicInfo: BasicInfoReducer,
        workExperience: WorkExperienceReducer,
        skills: SkillsReducer,
        projects: ProjectsReducer,
        education: EducationReducer,
        achievements: AchievementsReducer
    }
})