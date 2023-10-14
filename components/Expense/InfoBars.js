import {FlatList, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {CakeIcon,PencilSquareIcon,EllipsisHorizontalIcon} from "react-native-heroicons/solid";
import{TrashIcon} from "react-native-heroicons/outline";
import React, {useRef, useState} from "react";
import {themeColors} from "../../theme";
import {useNavigation} from "@react-navigation/native";
import Pagination,{Icon,Dot} from 'react-native-pagination';
import {GlobalStyles} from "../../constants/styles";
import axios from "axios";
import {BASE_URL} from "../../config";



export default function InfoBars({details , keyField ,category}) {
    let navigation = useNavigation();
    const [showButtons,setShowButtons]=useState(false);
    const [id,setId]=useState('');

    const deleteExpense = async (expenseID) => {
        console.log("delete expense",expenseID);
        setModalVisible(!modalVisible);
        const apiURL = BASE_URL + "/expenses/delete/"+expenseID;
        const response = await axios.delete(apiURL,null);

    }
    function showbuttonHandle(itemId){
        console.log("show btn");
        setShowButtons(prevState => ({ ...prevState, [itemId]: true }));
    }
    function hidebuttonHandle(itemId){
        console.log("hide btn")
        setShowButtons(prevState => ({ ...prevState, [itemId]: false }));
    }
    function handleDelete(itemId){
        setModalVisible(true);
        console.log("delete btn")
        setId(itemId);
    }

//     const renderPagination = (currentPage) => {
//         const startIndex = (currentPage - 1) * itemsPerPage;
//         const endIndex = startIndex + itemsPerPage;
// console.log(startIndex,endIndex,currentPage);
//         return (
//             <Pagination
//                 listRef={this.flatListRef}
//                 paginationVisibleItems={details.slice(startIndex, endIndex)}
//                 paginationItems={details}
//                 paginationItemPadSize={3}
//                 onPageChange={(page) => setCurrentPage(page)}
//             />
//         );
//     };
    const [modalVisible, setModalVisible] = useState(false);
    console.log("button statue",showButtons);
    return(

        category==='Budget'?(
            <FlatList
                data={details}

                keyExtractor={(item) => item[keyField].toString()}

                renderItem={({ item }) => (
                    <View style={{...styles.btn}} className={"flex-row mt-4 justify-between"}>


                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity className={"rounded-full p-3  "}
                                              style={{backgroundColor: '#70AABA'}}>
                                <CakeIcon size="27" color="white"/>
                            </TouchableOpacity>
                            <View className={"left-2"}>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: '700',
                                        textAlign: 'left'
                                    }}
                                > {item.budgetName}</Text>

                                <Text style={{color: 'gray', width: 200, textAlign: 'left'}}>{new Date(item.startdate).toLocaleDateString()}- {new Date(item.enddate).toLocaleDateString()}</Text>
                            </View>
                        </View>
                        {/*<EllipsisHorizontalIcon size="27" color="black" />*/}
                        <View className={" p-1 float-right"}>
                            <Text  style={{
                                fontSize: 18,
                                fontWeight: '500',

                            }}>Rs.{item.amount}</Text>

                        </View>

                    </View>
                )

                }

            />
        ):(

            <>

                <FlatList




                    keyExtractor={(item) => item[keyField].toString()}

                    data={details}

                    renderItem={({ item }) => (
                        <>
                            {(showButtons[item[keyField]]&&(
                                    <TouchableOpacity          style={{...styles.btnoverlay}}
                                                               className={"flex-row   absolute z-10 top-3  w-full h-full"}
                                                               onPress={() => setShowButtons(prevState => ({ ...prevState, [item[keyField]]: false }))}
                                    >
                                        <TouchableOpacity className={"mr-3"}  onPress={() => handleDelete(item.expenseID)} >
                                            <TrashIcon size="27" color="red" />
                                        </TouchableOpacity>
                                        <TouchableOpacity className={"ml-3"}  onPress={() => navigation.navigate('ExpenseForm',{Editdata:item,title:"Edit Expense"})}>
                                            <PencilSquareIcon size="27" color="black" />
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                )
                            )}
                            <TouchableOpacity onPress={() => setShowButtons(prevState => ({ ...prevState, [item[keyField]]: true }))}

                                              style={{...styles.btn}}
                                              className={"flex-row mt-4 justify-between"}>


                                <View style={{flexDirection: 'row'}}>
                                    <TouchableOpacity className={"rounded-full p-3  "}
                                                      style={{backgroundColor: '#70AABA'}}>
                                        <CakeIcon size="27" color="white"/>
                                    </TouchableOpacity>
                                    <View className={"left-2"}>
                                        <Text
                                            style={{
                                                fontSize: 18,
                                                fontWeight: '700',
                                                textAlign: 'left'
                                            }}
                                        > {item.expenseName}</Text>

                                        <Text style={{
                                            color: 'gray',

                                            paddingLeft: 5,
                                            width: 150,
                                            textAlign: 'left',
                                        }}>{item.notes}</Text>
                                    </View>
                                </View>

                                <View className={" p-1"}>
                                    <Text>Rs.{item.amount}</Text>
                                    <Text
                                        style={{color: 'gray'}}>{new Date(item.date).toLocaleDateString()}</Text>
                                </View>
                                {/*<EllipsisHorizontalIcon size="27" color="black" style={{position:'absolute',right:20,marginTop:5}} />*/}

                                <View style={styles.centeredView}>
                                    <Modal

                                        transparent={true}
                                        visible={modalVisible}
                                        onRequestClose={() => {
                                            setModalVisible(!modalVisible);
                                        }}>
                                        <View style={{...styles.modalView}}>
                                            <Text>Are You sure, You want to Delete this?</Text>
                                            <View className={"flex-1 flex-row gap-4 my-2"}>
                                                <Pressable
                                                    style={styles.cancel}
                                                    onPress={() => setModalVisible(!modalVisible)}>
                                                    <Text   style={{color:themeColors.btnColor}}>Cancel</Text>
                                                </Pressable>
                                                <Pressable
                                                    style={styles.Button}
                                                    onPress={() => (deleteExpense(id))}>
                                                    <Text   style={{color:'white'}}>Delete</Text>
                                                </Pressable>
                                            </View>
                                        </View>
                                    </Modal>
                                </View>
                            </TouchableOpacity>
                        </>
                    )

                    }

                />


            </>
        )


    )

}
const styles = StyleSheet.create({
    Button:{
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor:themeColors.btnColor,
        // borderColor:'grey'
    },
    cancel:{
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor:'white',
        borderColor:'themeColors.btnColor'
    },
    Box:{
        width:'100%',

        borderRadius: 15,
        flexDirection: 'row',
        padding: 22,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowRadius: 4,


    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    btn:{
        backgroundColor:'white',
        minHeight:80,
        borderRadius: 15,
        padding: 22,
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    },
    btnoverlay:{
        backgroundColor: 'rgba(236, 240, 241,0.8)',
        minHeight:80,
        borderRadius: 15,
        padding: 22,
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        position:'absolute',
        top:'40%',
        right:15,

    },
})
