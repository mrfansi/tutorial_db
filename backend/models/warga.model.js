import { DataTypes, Model } from "sequelize";

import db from '../config/db.config.js'

export default class WargaModel extends Model {}

WargaModel.init({
    nama:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    nikk:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    contact:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    alamatKtp:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    pekerjaan:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    }
}, {
    sequelize:db,
    freezeTableName:true,
    underscored:true,
    timestamps:false,
    modelName:'warga'
})