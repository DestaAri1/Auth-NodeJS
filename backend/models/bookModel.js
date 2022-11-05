import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const book = db.define('books', {
    judul :{
        type: DataTypes.STRING
    },
    nama: {
        type: DataTypes.STRING
    },
    pengarang: {
        type: DataTypes.STRING
    },
    penerbit: {
        type: DataTypes.STRING
    },
    tahun: {
        type: DataTypes.INTEGER
    },
    id_kategori: {
        type: DataTypes.INTEGER,
    }
},{
    indexes:[{
        unique:false,
        fields: ['id_kategori']
    }]
}
,{
    freezeTableName: true
}
)
export default book;

