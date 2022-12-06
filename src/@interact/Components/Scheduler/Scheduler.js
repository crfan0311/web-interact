import ScheduleSelector from 'react-schedule-selector'
import { useState } from 'react'
import TimezoneSelect from 'react-timezone-select'

export default function Scheduler() {
    const [schedule, setSchedule] = useState([])
    const handleChange = (newSchedule) => {
        setSchedule(newSchedule)
    }

    const creatorSchedules = {};

    return (
        <div>
            {/* This shows when content creators are generally not available. Use this as reference to  optimize your availability schedule so that both you & the creator will have scheduled an optimal interaction. */}
            {/* <br/><br/> */}
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <div style={{overflowY:'scroll', width:'45%'}}>
                    <div style={{textDecorationLine: 'underline'}}>Your availability</div>
                    Choose your general availability from Monday to Sunday. You will be matched with the creator's weekly-released schedule according to the availability you set here.
                    <br /><br />
                    <ScheduleSelector
                        selection={schedule}
                        numDays={7}
                        minTime={0}
                        maxTime={24}
                        rowGap='1px'
                        columnGap='1px'
                        hourlyChunks={4}
                        onChange={handleChange} 
                        unselectedColor='#ddd' 
                        renderDateLabel={
                            (date)=>{return <div>{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()]}</div>}
                        }
                        renderTimeLabel={
                            (time)=>{
                                const hour = time.getHours();
                                const timestring = (hour==0 ? '12' : ((hour-1)%12+1).toString()).concat(hour<11 ? 'am' : 'pm');
                                return (<div>{time.getMinutes()==0 ? timestring: null}</div>
                            )}
                        }
                        startDate = {new Date('15 August 2022')}
                        // renderDateCell={(datetime, selected, refSetter)=>{
                        //     return (
                        //         <div ref={refSetter} style={selected ? {height:10, backgroundColor:'#836fee'}:{height:10, backgroundColor: '#ccc'}}>

                        //         </div>
                        //     )
                        // }}
                        selectedColor='#782fee'
                    />
                </div>
                <div style={{overflowY:'scroll', width:'45%'}}>
                    <div style={{textDecorationLine: 'underline'}}>Creator availability</div>
                    This shows when content creators are generally not available. Use this as reference to  optimize your availability schedule so that both you & the creator will have scheduled an optimal interaction.

                    <ScheduleSelector
                        selection={schedule}
                        numDays={7}
                        minTime={0}
                        maxTime={24}
                        rowGap='1px'
                        columnGap='1px'
                        hourlyChunks={4}
                        onChange={handleChange} 
                        unselectedColor='#ddd' 
                        renderDateLabel={
                            (date)=>{return <div>{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()]}</div>}
                        }
                        startDate = {new Date('15 August 2022')}
                        renderTimeLabel={
                            (time)=>{
                                const hour = time.getHours();
                                const timestring = (hour==0 ? '12' : ((hour-1)%12+1).toString()).concat(hour<11 ? 'am' : 'pm');
                                return (<div>{time.getMinutes()==0 ? timestring: null}</div>
                            )}
                        }
                        // renderDateCell={(datetime, selected, refSetter)=>{
                        //     return (
                        //         <div ref={refSetter} style={selected ? {height:10, backgroundColor:'#836fee'}:{height:10, backgroundColor: '#ccc'}}>

                        //         </div>
                        //     )
                        // }}
                        selectedColor='#cf0000'
                    />
                </div>
            </div>
            <center>
            <div style={{width:'50%'}}>                                Time zone:
                            <TimezoneSelect 
                                value={0}
                                onChange={0}
                            />
            </div></center>
        </div>
    )
}
