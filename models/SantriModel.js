import {  Sequelize } from "sequelize";
import db from "../config/Database.js";
import Kamar from "./KamarModel.js";
import Kelas from "./KelasModel.js";
import Nilai from "./NilaiModel.js";
import Users from "./UserModel.js";

const {DataTypes} = Sequelize;

const Santri = db.define('santri', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue:  DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    nis: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    nameLengkap:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    tempatLahir: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    tanggalLahir:{
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    
    jenisKelamin: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    noTelepon: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    agama:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    alamat: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    asalSekolah: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    statusSantri: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    namaWali: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    pekerjaanWali: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    alamatWali: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    noTeleponWali: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    // userId:{
    //         type: DataTypes.INTEGER,
    //         allowNull: false,
    //         validate:{
    //                 notEmpty: true,
    //             }
    //         },
        },{
            freezeTableName:true
        });

Kamar.hasMany(Santri);
Santri.belongsTo(Kamar, {foreignKey: 'kamarId'});

// Kelas.hasMany(Santri);
// Santri.belongsTo(Kelas, {foreignKey: 'kelasId'});

// Nilai.hasMany(Santri);
// Santri.belongsTo(Nilai, {foreignKey: 'nilaiId'});

// Users.hasMany(Santri);
// Santri.belongsTo(Users, { foreignKey: 'usersId' });

Santri.hasMany(Users, { foreignKey: 'santriId' });

        
export default Santri;      