import * as mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({

    user: {
         type: mongoose.Schema.Types.ObjectId, 
         refs: 'User',
         required : true
    },
    lib_no: {
        type: String,
        required : true
    },
    standard: {
         type: String, 
         required : true
    },
    section: {
         type: String, 
         required : true
    },
    date: Date,
    isLate: {
        type: Boolean,
    } ,
    arrival_time: {
        type: String,
    },
    status: {
        type:String,
        required:true
    },
    remarks:      String,
    created_at:   Date,
    updated_at:   Date
});

attendanceSchema.pre('save', function(next) {

    const attendance = this;
    const now = new Date();
    attendance.updated_at = now;

    console.log('[Attendance-Model]  save(): attendence=' + JSON.stringify(attendance) );

    if (!attendance.created_at) {
       attendance.created_at = now;
    }

    next();
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

export default Attendance;