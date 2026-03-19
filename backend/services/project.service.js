import projectModel from '../models/project.model.js';
import mongoose from 'mongoose';

export const createProject = async ({
    name, userId
}) => {
    if (!name) {
        throw new Error('Name is required')
    }
    if (!userId) {
        throw new Error('UserId is required')
    }
    let project;
    try {
        project = await projectModel.create({
            name,
            users: [ userId ]
        });
    } catch (error) {
        if (error.code === 11000) {
            throw new Error('Project name already exists');
        }
        throw error;
    }
    return project;
}

export const getAllProjectByUserId = async ({ userId }) => {
    if (!userId) {
        throw new Error('UserId is required')
    }
    const allUserProjects = await projectModel.find({
        users: userId
    })
    return allUserProjects
}

export const addUsersToProject = async ({ projectId, users, userId }) => {
    if (!projectId) {
        throw new Error("projectId is required")
    }
    if (!mongoose.Types.ObjectId.isValid(projectId)) {
        throw new Error("Invalid projectId")
    }
    if (!users) {
        throw new Error("users are required")
    }
    if (!Array.isArray(users) || users.some(userId => !mongoose.Types.ObjectId.isValid(userId))) {
        throw new Error("Invalid userId(s) in users array")
    }
    if (!userId) {
        throw new Error("userId is required")
    }
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        throw new Error("Invalid userId")
    }
    const project = await projectModel.findOne({
        _id: projectId,
        users: userId
    })
    console.log(project)
    if (!project) {
        throw new Error("User not belong to this project")
    }
    const updatedProject = await projectModel.findOneAndUpdate({
        _id: projectId
    }, {
        $addToSet: {
            users: {
                $each: users
            }
        }
    }, {
        new: true
    })
    return updatedProject
}

export const getProjectById = async ({ projectId, userId }) => {
    if (!projectId) {
        throw new Error("projectId is required")
    }
    if (!mongoose.Types.ObjectId.isValid(projectId)) {
        throw new Error("Invalid projectId")
    }
    
    // If userId is provided, check authorization
    if (userId) {
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            throw new Error("Invalid userId")
        }
        const project = await projectModel.findOne({
            _id: projectId,
            users: userId
        }).populate('users')
        
        if (!project) {
            throw new Error("User not authorized to access this project")
        }
        return project;
    }
    
    // If no userId provided, return project without authorization check
    const project = await projectModel.findOne({
        _id: projectId
    }).populate('users')
    return project;
}

export const updateFileTree = async ({ projectId, fileTree, userId }) => {
    if (!projectId) {
        throw new Error("projectId is required")
    }
    if (!mongoose.Types.ObjectId.isValid(projectId)) {
        throw new Error("Invalid projectId")
    }
    if (!fileTree) {
        throw new Error("fileTree is required")
    }
    
    // Add authorization check if userId is provided
    if (userId) {
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            throw new Error("Invalid userId")
        }
        
        const existingProject = await projectModel.findOne({
            _id: projectId,
            users: userId
        });
        
        if (!existingProject) {
            throw new Error("User not authorized to update this project")
        }
    }
    
    const project = await projectModel.findOneAndUpdate({
        _id: projectId
    }, {
        fileTree
    }, {
        new: true
    })
    return project;
}

export const deleteProject = async ({ projectId, userId }) => {
    // Add proper validation
    if (!projectId) {
        throw new Error("projectId is required")
    }
    if (!mongoose.Types.ObjectId.isValid(projectId)) {
        throw new Error("Invalid projectId")
    }
    if (!userId) {
        throw new Error("userId is required")
    }
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        throw new Error("Invalid userId")
    }
    
    const project = await projectModel.findOne({
        _id: projectId,
        users: userId
    });
    
    if (!project) {
        throw new Error("User is not authorized to delete this project");
    }
    
    await project.deleteOne();
    return { message: "Project deleted successfully" };
};