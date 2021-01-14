const { Sequelize, DataTypes } = require('sequelize');
// const Beneficiar = require('./Beneficiar.js');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite3'
})


const Client = sequelize.define('Client', {
    TB_REZIDENT: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    TB_ORGINN: {
        type: DataTypes.BIGINT(9),
        allowNull: false
    },
    //not correct
    TB_ORGNAME:{
        type: DataTypes.STRING,
        allowNull: false
    },
    //not correct

    TB_KOD_OKONX: {
        type: DataTypes.INTEGER(5),
        allowNull: false,
    },
    TB_KOD_OKED: {
        type: DataTypes.INTEGER(5),
        allowNull: false,
    },
    TB_ORGMFO: {
        type: DataTypes.INTEGER(5),
        allowNull: false,
    },
    TB_ORGBANK: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    TB_ORGSCHET: {
        type: DataTypes.BIGINT(20),
        allowNull: false
    },
    TB_KOD_OKPO: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_KOD_SOATO: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_DIREKTOR: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_BUHGALTER: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_BASIS: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_ISBANK: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    TB_COUNTRY: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_OBLAST: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_RAYON: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_ULICA: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_DOM: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_KV: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_EMAIL: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_SITE: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_POCHTA: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_PHONE1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_PHONE2: {
        type: DataTypes.STRING,
        allowNull: false
    },
    TB_FAX: {
        type: DataTypes.STRING,
        allowNull: false
    }
    // "TB_ORGINN": 303442183,
    // "TB_SURNAME": null,
    // "TB_NAME": null,
    // "TB_PATRONYM": null,
    // "TB_DATEBIRTH": null,
    // "TB_PASPSERY": null,
    // "TB_PASPNUMBER": null,
    // "TB_PASPVIDAN": null,
    // "TB_PASPDATE": null,
    // "TB_PRAVA_SERY": null,
    // "TB_PRAVA_NUMBER": null,
    // "TB_PRAVA_DATE": null,
    // "TB_REZIDENT": 1,
    // "TB_KOD_OKONX": null,
    // "TB_KOD_OKPO": null,
    // "TB_KOD_SOATO": null,
    // "TB_DIREKTOR": "З. ФАЙЗИБОЕВ",
    // "TB_BUHGALTER": null,
    // "TB_PHONE1": "+998 (00) 000-00-00",
    // "TB_PHONE2": null,
    // "TB_FAX": null,
    // "TB_ISBANK": 0,
    // "TB_ORGTYPE": 6,
    // "TB_ORGNAME": "PISKENT TRANS BIZNES\" MCHJ",
    // "TB_ORGMFO": 774,
    // "TB_ORGBANK": "ДАТ ХАЛК БАНК ПИСКЕНТ ФИЛИАЛИ",
    // "TB_ORGSCHET": 2.0208000800499462e+19,
    // "TB_COUNTRY": 182,
    // "TB_OBLAST": 11,
    // "TB_RAYON": 1103,
    // "TB_ULICA": "Pskent shahri, X.XAYDAROV",
    // "TB_DOM": 27,
    // "TB_KV": null,
    // "TB_OSTATOK": "0,00",
    // "TB_OST_NA_DATU": null,
    // "TB_FIZYUR": 1,
    // "TB_OLD": 0,
    // "TB_EMAIL": null,
    // "TB_POCHTA": null,
    // "TB_SITE": null,
    // "TB_BASIS": "УСТАВА",
    // "TB_SEX": null,
    // "USER_ID": 2706,
    // "CREATED_DATE": null,
    // "MODIFIED_DATE": null,
    // "MOD_USER": null,
    // "TB_CHP": 0,
    // "TB_INPS": null,
    // "TB_CERTIFICATE": null,
    // "TB_CERT_BEGIN": null,
    // "TB_CERT_END": null,
    // "TB_INVESTOR": 0,
    // "TB_KOD_OKED": null,
    // "TB_SCORING": null,
    // "TB_CREDIT_NUMBER": null,
    // "TB_PINFL": null
})
Client.sync();
module.exports = Client;