import React, { useState } from "react";
import { View, StatusBar, Text, FlatList, Button, TouchableOpacity, Image, Modal, TextInput } from "react-native";
import users, { pushMeetingCreated } from "../../mocks/users";
import DatePicker from 'react-native-date-picker';
import moment from "moment";
import 'moment/locale/es';

import { HeaderForScreen } from "../components/HeaderForScreen";
const styles = {
   main_container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: 'gray',
      flex: 1,
   },
   items_container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      width: '95%',
      paddingBottom: '14%'
   },
   select_container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '95%',
      margin: '8%',
      height: '12%',
      padding: '4%',
   },
   text_select_modal: {

      height: '30%',
      width: '62%',
      alignItems: 'center',
      justifyContent: 'center'
   },
   text_select: {
      borderBottomWidth: 2,
      borderColor: '#F4E201',
      height: '70%',
      width: '62%',
      alignItems: 'center',
      justifyContent: 'center'
   },
   btn_login: {
      marginTop: '10%',
      display: 'flex',
      backgroundColor: '#F4E201',
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'black',
      height: 50,
      borderRadius: 100
   }
}

const styles_1 = {
   centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.712)",
      paddingTop: '35%'
   },
   modalView: {
      margin: 20,
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowOffset: {
         width: 0,
         height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
   },
   button: {
      borderRadius: 20,
      padding: 10,
   },
   buttonOpen: {
      backgroundColor: "black",
   },
   buttonClose: {
   },
   textStyle: {
      color: "gray",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 20
   },
   modalText: {
      marginBottom: 15,
      textAlign: "center"
   }
};

export const CreateMeetingScreen = (props, { navigation }) => {

   const [time, setTime] = useState(new Date())
   const [open, setOpen] = useState(false)

   const [date_1, setDate_1] = useState(new Date())
   const [open_1, setOpen_1] = useState(false)

   const [selectDate, setSelectDate] = useState("Select")
   const [selectDate_1, setSelectDate_1] = useState("date")

   const [selectTimeHour, setSelecTimeHour] = useState("Select")
   const [selectTimeMinute, setSelecTimeMinute] = useState("hour")

   const [selectLocation, setSelectLocation] = useState("Place")

   const [modalVisible, setModalVisible] = useState(false);
   const [modalVisiblePlace, setModalVisiblePlace] = useState(false);

   const [friendName, setFriendName] = useState("Pick a fiend of yours !!")



   /// recibir usuario al momento del Login para despues saber que DATA usar ///
   const friends = users[6].friends
   const pushGeneratedJson = () => {
      const json = generateJson()
      console.log("JSON ----------------->>", JSON.stringify(json, null, 2))
      pushMeetingCreated(json)
   }

   const setAMPM = () => {
      if (selectTimeHour < 12) {
         return 'AM'
      } else if (selectTimeHour > 12) {
         return 'PM'
      }
   }

   const generateJson = () => {

      const datePlusDate = `${selectDate} ${selectDate_1}`
      const hourPlusMinute = `${selectTimeHour}:${selectTimeMinute}`
      const ampm = setAMPM()

      return {
         sent: true,
         name: friendName,
         locate: selectLocation,
         date: datePlusDate,
         hour: hourPlusMinute,
         time: ampm,
         meetingStatus: null,
         meetingResponse: true
      }
   }

   const timeSelected = (time) => {
      setTime(time)
      setSelecTimeHour(time.getHours())
      if (time.getMinutes() > 10) {
         return setSelecTimeMinute(time.getMinutes())
      } else if (time.getMinutes() < 10) {
         const minutes = time.getMinutes()
         const minutesToShow = `0${minutes}`
         return setSelecTimeMinute(minutesToShow)
      }
      setOpen(false)
   }

   const dateSelected = (date) => {
      const dateSpanish = moment(date)
      setDate_1(date)
      moment.locale('en')
      setSelectDate(dateSpanish.format('dddd'))
      setSelectDate_1(dateSpanish.format("ll"))
   }

   const friendSelected = (id) => {
      const returnedName = friends.filter((item, index) => {
         if (id === index) {
            return item.name
         }
      })
      setFriendName(returnedName[0].name)
      setModalVisible(false)
   }

   const friendsItem = (data) => {
      return (
         <TouchableOpacity
            style={{ width: 200, height: 50, backgroundColor: '#F4E201', margin: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}
            onPress={() => friendSelected(data.item.id)}
         >
            <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 20 }}>
               {data.item.name}
            </Text>
         </TouchableOpacity>
      )
   }

   const PlaceInput = () => {
      const [locationFor, setLocationFor] = useState('Where is the meeting?')
      const place = (data) => {
         setLocationFor(data)
      }
      const placeSelected = () => {
         setSelectLocation(locationFor)
         setModalVisiblePlace(false)
      }
      return (
         <View style={{ width: 250, alignItems: 'center', marginTop: -50, justifyContent: 'center' }}>
            <View
               style={[styles.text_select_modal, { width: '80%' }]}
            >
               <TextInput
                  style={{ width: '80%', textAlign: 'center' }}
                  autoCorrect={false}
                  placeholder={'Where is the meeting?'}
                  maxLength={20}
                  selectionColor={'#F4E201'}
                  onChangeText={place}
               >
               </TextInput>
            </View>

            <TouchableOpacity
               onPress={() => placeSelected()}
               style={styles.btn_login}
            >
               <View>
                  <Text style={{ color: 'gray', fontSize: 24, fontWeight: 'bold' }}>OK</Text>
               </View>
            </TouchableOpacity>
         </View>
      )
   }


   return (
      <View style={styles.main_container} >
         <StatusBar barStyle="dark-content" hidden={false} backgroundColor='#F4E201' translucent={false} />
         <HeaderForScreen props={props} />
         <View style={styles.items_container}>
            <TouchableOpacity
               style={styles.select_container}
               onPress={() => setModalVisible(true)}
            >
               <Modal
                  animationType="fade"
                  transparent={true}
                  visible={modalVisible}
               >
                  <View style={styles_1.centeredView}>
                     <View style={[styles_1.button, styles_1.buttonClose]}>
                        <FlatList
                           data={friends}
                           keyExtractor={item => item.id}
                           renderItem={item => friendsItem(item)}
                        />
                     </View>
                  </View>
               </Modal>
               <Image
                  style={{ height: 80, width: 80, tintColor: '#F4E201' }}
                  source={require("../assets/user_profile.png")}
               />
               <View style={styles.text_select}>
                  <Text>{friendName}</Text>
               </View>
            </TouchableOpacity>


            <TouchableOpacity
               style={styles.select_container}
               onPress={() => setOpen_1(true)}
            >
               <Image
                  style={{ height: 80, width: 80, tintColor: '#F4E201' }}
                  source={require("../assets/calendar.png")}
               />
               <View style={styles.text_select}>
                  <Text>
                     {selectDate}
                     {" "}
                     {selectDate_1}
                  </Text>
               </View>
               <DatePicker
                  title={null}
                  mode={"date"}
                  textColor={'#F4E201'}
                  modal
                  minimumDate={new Date()}
                  open={open_1}
                  date={date_1}
                  onConfirm={(date) => {
                     dateSelected(date)
                     setOpen_1(false)
                  }}
                  onCancel={() => {
                     setOpen_1(false)
                  }}
               />
            </TouchableOpacity>
            <TouchableOpacity
               style={styles.select_container}
               onPress={() => setOpen(true)}
            >
               <Image
                  style={{ height: 80, width: 80, tintColor: '#F4E201' }}
                  source={require("../assets/hour.png")}
               />
               <View style={styles.text_select}>
                  <Text>
                     {console.log(time)}
                     {selectTimeHour}
                     {(selectTimeHour === 'Select' && selectTimeMinute === 'hour') ? " " :
                        ":"
                     }
                     {selectTimeMinute}
                  </Text>
               </View>
               <DatePicker
                  title={null}
                  is24hourSource={'device'}
                  mode={"time"}
                  textColor={'#F4E201'}
                  modal
                  open={open}
                  date={time}
                  onConfirm={(time) => {
                     timeSelected(time)
                     setOpen(false)
                  }}
                  onCancel={() => {
                     setOpen(false)
                  }}
               />
            </TouchableOpacity>



            <TouchableOpacity
               style={styles.select_container}
               onPress={() => setModalVisiblePlace(true)}
            >
               <Modal
                  animationType="fade"
                  transparent={true}
                  visible={modalVisiblePlace}
               >
                  <View style={styles_1.centeredView}>
                     <View style={[styles_1.button, styles_1.buttonClose]}>
                        <PlaceInput />
                     </View>
                  </View>
               </Modal>
               <Image
                  style={{ height: 90, width: 90, tintColor: '#F4E201' }}
                  source={require("../assets/map.png")}
               />
               <View style={styles.text_select}>
                  <Text>{selectLocation}</Text>
               </View>

            </TouchableOpacity>

            <TouchableOpacity
               style={styles.btn_login}
               onPress={() => pushGeneratedJson()}
            >
               <View>
                  <Text style={{ color: 'gray', fontSize: 24, fontWeight: 'bold' }}>SEND</Text>
               </View>
            </TouchableOpacity>


         </View>
      </View>
   )
}