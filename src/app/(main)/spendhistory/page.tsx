"use client";

// import datetime from datetime 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Modal } from 'antd';
import Image from 'next/image';
import axios from 'axios';
import styles from './spendtype.module.scss';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { faSearch, faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
    faDog,
    faGuitar,
    faMagnifyingGlass,
    faPhone,
    faCartShopping,
    faCarSide,
    faPlaneDeparture,
    faPizzaSlice,
    faBurger,
    faCheese,
    faIceCream,
    faBowlFood,
    faBreadSlice,
    faMugHot,
    faShip,
    faVideo,
    faStar,
    faShirt,
    faMartiniGlass,
    faVolleyball,
    faBaseballBatBall,
    faTableTennisPaddleBall,
    faFutbol,
    faGolfBallTee,
    faFootball,
    faBicycle,
    faHouse, faUser, faCheck, faDownload, faImage, faBars, faEnvelope,
    faMusic, faWandMagicSparkles, faHeart, faArrowRight,
    faCircleXmark, faBomb, faPoo, faCameraRetro, faXmark, faCloud,
    faComment, faCaretUp, faTruckFast, faPenNib, faArrowUp, faHippo,
    faFaceSmile, faCalendarDays, faPaperclip, faShieldHalved,
    faFile, faBell, faClipboard, faFilter, faCircleInfo, faArrowUpFromBracket,
    faBolt, faCar, faGhost, faCircleUser, faPen, faUmbrella,
    faGift, faFilm, faList, faGear, faTrash, faCircleUp, faCircleDown, faInbox, faRotateRight, faLock, faHeadphones,
    faBarcode, faTag, faBook, faBookmark, faPrint, faCamera,
    faFont, faCircleHalfStroke, faDroplet, faShareFromSquare, faPlus,
    faMinus, faShare, faCircleExclamation, faFire, faEye, faEyeSlash,
    faPlane, faMagnet, faHand, faFolder, faFolderOpen, faMoneyBill, faThumbsUp, faThumbsDown, faComments, faLemon, faKey, faThumbtack,
    faGears, faPaperPlane, faCode, faGlobe, faTruck, faCity,
    faTicket, faTree, faWifi, faPaintRoller, faSliders, faBrush,
    faHashtag, faFlask, faBriefcase, faCompass, faDumpsterFire, faPerson, faPersonDress,
    faAddressBook, faBath, faHandshake, faSnowflake,
    faRightToBracket, faEarthAmericas, faCloudArrowUp, faBinoculars, faPalette,
    faLayerGroup, faUsers, faGamepad, faBusinessTime,
    IconDefinition
} from '@fortawesome/free-solid-svg-icons';

const SpendType: React.FC = () => {

    const iconMapping: Record<string, IconDefinition> = {
        faDog,
        faGuitar,
        faMagnifyingGlass,
        faPhone,
        faCartShopping,
        faCarSide,
        faPlaneDeparture,
        faPizzaSlice,
        faBurger,
        faCheese,
        faIceCream,
        faBowlFood,
        faBreadSlice,
        faMugHot,
        faShip,
        faVideo,
        faStar,
        faShirt,
        faMartiniGlass,
        faVolleyball,
        faBaseballBatBall,
        faTableTennisPaddleBall,
        faFutbol,
        faGolfBallTee,
        faFootball,
        faBicycle,
        faHouse,
        faUser,
        faCheck,
        faDownload,
        faImage,
        faBars,
        faEnvelope,
        faMusic,
        faWandMagicSparkles,
        faHeart,
        faArrowRight,
        faCircleXmark,
        faBomb,
        faPoo,
        faCameraRetro,
        faXmark,
        faCloud,
        faComment,
        faCaretUp,
        faTruckFast,
        faPenNib,
        faArrowUp,
        faHippo,
        faFaceSmile,
        faCalendarDays,
        faPaperclip,
        faShieldHalved,
        faFile,
        faBell,
        faClipboard,
        faFilter,
        faCircleInfo,
        faArrowUpFromBracket,
        faBolt,
        faCar,
        faGhost,
        faCircleUser,
        faPen,
        faUmbrella,
        faGift,
        faFilm,
        faList,
        faGear,
        faTrash,
        faCircleUp,
        faCircleDown,
        faInbox,
        faRotateRight,
        faLock,
        faHeadphones,
        faBarcode,
        faTag,
        faBook,
        faBookmark,
        faPrint,
        faCamera,
        faFont,
        faCircleHalfStroke,
        faDroplet,
        faShareFromSquare,
        faPlus,
        faMinus,
        faShare,
        faCircleExclamation,
        faFire,
        faEye,
        faEyeSlash,
        faPlane,
        faMagnet,
        faHand,
        faFolder,
        faFolderOpen,
        faMoneyBill,
        faThumbsUp,
        faThumbsDown,
        faComments,
        faLemon,
        faKey,
        faThumbtack,
        faGears,
        faPaperPlane,
        faCode,
        faGlobe,
        faTruck,
        faCity,
        faTicket,
        faTree,
        faWifi,
        faPaintRoller,
        faSliders,
        faBrush,
        faHashtag,
        faFlask,
        faBriefcase,
        faCompass,
        faDumpsterFire,
        faPerson,
        faPersonDress,
        faAddressBook,
        faBath,
        faHandshake,
        faSnowflake,
        faRightToBracket,
        faEarthAmericas,
        faCloudArrowUp,
        faBinoculars,
        faPalette,
        faLayerGroup,
        faUsers,
        faGamepad,
        faBusinessTime
    };

    const getIconFromSvgUrl = (svgUrl: string): IconDefinition => {

        const icon = iconMapping[svgUrl];

        if (icon) {
            return icon;
        } else {
            return faDog;  // Fallback icon if not found
        }
    };

    const [spendTypes, setSpendTypes] = useState([
        {
            abbreviation: "",
            color: {
                id: 0,
                name: "",
                colorCode: ""
            },
            estimatedAmount: 0,
            expenditure: [],
            icon: {
                id: 0,
                name: "",
                svgUrl: ""
            },
            id: 0,
            name: "",
            spent: 0,
            spentAmount: 0,
        }
    ]);

    const [expenditure, setExpenditure] = useState([
        {
            id: 0,
            name: "",
            amount: 0,
            dateSpinding: "",
            typeSprinding: {
                id: 0,
                name: "",
                estimatedAmount: 0,
                abbreviation: "",
                color:{
                    colorCode: "",
                },
                icon: {
                    svgUrl: "",
                }
            }
        }
    ]);

    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const [expenditureName, setExpenditureName] = useState('');
    const [expenditureSpendType, setExpenditureSpendType] = useState("");
    const [expenditureAmount, setExpenditureAmount] = useState<any>();
    const [expenditureDate, setExpenditureDate] = useState<any>();
    const [loading, setLoading] = useState(true);  // State to handle loading
    const totalEstimated = loading ? spendTypes.reduce((total, item) => total + item.estimatedAmount, 0) : 0;

    const [editId, setEditId] = useState<any>();
    const [editExpenditureName, setEditExpenditureName] = useState<any>();
    const [editExpenditureType, setEditExpenditureType] = useState<any>();
    const [editExpenditureSpendAmount, setEditExpenditureSpendAmount] = useState<any>();
    const [editExpenditureDate, setEditExpenditureDate] = useState<any>();

    const fetchSpendTypes = async () => {
        try {
            // Fetch data from API
            const userId = localStorage.getItem('userId');
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/type-sprinding?userId=${userId}`);
            console.log("API type Response: ", response.data);  // Log the response data

            const data = response.data.data;
            const updatedData = data.map((item: any) => ({
                ...item,  // Spread the existing properties of the item
                spent: 0  // Initialize `spent` to 0 or any value you want
            }));
            console.log(updatedData)

            setSpendTypes(updatedData);  // Set the modified data to state
            console.log("after set Response: ", spendTypes);  // Log the response data

        } catch (error) {

        } finally {
            setLoading(false);
        }
    };

    const fetchExpenditure = async () => {
        try {
            // Fetch data from API
            const userId = localStorage.getItem('userId');
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/expenditure?userId=${userId}`);
            console.log("API Response: ", response.data);  // Log the response data

            const data = response.data.data;
            const updatedData = data.map((item: any) => ({
                ...item,  // Spread the existing properties of the item
                spent: 0  // Initialize `spent` to 0 or any value you want
            }));
            console.log(updatedData)

            setExpenditure(updatedData);  // Set the modified data to state
        } catch (error) {

        } finally {
            setLoading(false);
        }
    }

    // useEffect to call API when component mounts
    useEffect(() => {
        fetchSpendTypes();
        fetchExpenditure();
    }, []);

    const handleOk = () => {
        if (editExpenditureType === "") {
            toast.error('Loại chi tiêu trống');
            return;
        }
        if (editExpenditureSpendAmount === null || editExpenditureSpendAmount === 0) {
            toast.error('Số tiền dự tính không hợp lệ');
            return;
        }

        const userId = localStorage.getItem('userId')
        setIsModalVisible(false);
        axios.put(`${process.env.NEXT_PUBLIC_API_URL}/expenditure/update/${editId}`, {
            name: editExpenditureName,
            tsId: editExpenditureType,
            amount: editExpenditureSpendAmount,
            dateSpinding: editExpenditureDate,
            userId,
        })
            .then(res => {
                toast.success("Sửa thành công");
                fetchExpenditure();
            })
            .catch(err => {
                console.log(err)
                toast.error("Sửa thất bại: " + err.response.data.message);
            })
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleDeleteClick = (item: any) => {
        setSelectedItem(item.id);
        setIsDeleteModalOpen(true);
    };

    const handleEditClick = (item: any) => {
        setSelectedItem(item);
        setIsEditModalOpen(true);
    };

    const createNewExpenditure = () => {
        if (expenditureName === "") {
            toast.error('Vui lòng nhập tên khoản chi tiêu')
            return
        }
        if (expenditureSpendType === "") {
            toast.error('Vui lòng nhập loại chi tiêu')
            return
        }
        if (expenditureAmount == null || expenditureAmount === 0) {
            toast.error('Vui lòng nhập số tiền dự tính')
            return
        }

        const userId = localStorage.getItem('userId')
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/expenditure`, {
            name: expenditureName,
            tsId: expenditureSpendType,
            amount: expenditureAmount,
            dateSpinding: expenditureDate,
            userId,
        })
            .then(res => {
                toast.success("Thêm thành công");
                fetchExpenditure();
            })
            .catch(err => {
                console.log(err)
                toast.error("Thêm thất bại: " + err.response.data.message);
            })
    };

    const showModal = (item: any) => {
        console.log(item)
        setIsModalVisible(true);
        setEditId(item.id)
        console.log(item.dateSpinding)
        const formattedDate = new Date(item.dateSpinding).toISOString().split('T')[0];
        setEditExpenditureDate(formattedDate);
        setEditExpenditureSpendAmount(item.amount)
        setEditExpenditureType(item.typeSprinding)
        setEditExpenditureName(item.name)
    };

    const handleConfirmDelete = () => {
        axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/expenditure/delete/${selectedItem}`, {
        })
            .then(res => {
                toast.success("Xóa thành công");
                fetchExpenditure();
            })
            .catch(err => {
                console.log(err)
                toast.error("Xóa thất bại: " + err.response.data.message);
            })
        setIsDeleteModalOpen(false);
        setSelectedItem(null);
    };

    const handleCancelDelete = () => {
        setIsDeleteModalOpen(false);
        setSelectedItem(null);
    };

    const handleCancelEdit = () => {
        setIsEditModalOpen(false);
        setSelectedItem(null);
    };

    const isNumeric = (str: string) => {
        if (typeof str !== "string") return false;
        return !isNaN(Number(str)) && !isNaN(parseFloat(str));
    };

    const filteredHistory = loading ? [] : expenditure.filter((item) => {
        const searchLower = searchTerm.toLowerCase();

        const matchesName = item.name.toLowerCase().includes(searchLower);

        const matchesAmount =
            isNumeric(searchTerm) &&
            (item.amount.toString().includes(searchTerm) || item.typeSprinding.name.includes(searchTerm));

        return matchesName || matchesAmount;
    });

    const options = [
        { value: 'Tiền nhà', label: 'Tiền nhà' },
        { value: 'Tiền điện', label: 'Tiền điện' },
        { value: 'Tiền nước', label: 'Tiền nước' },
        { value: 'Ăn uống', label: 'Ăn uống' },
    ];

    if (loading) {
        return <p>Loading spend types...</p>;
    }
    return (
        <div className="flex w-full h-full p-0 space-x-10 tao-bg">
            {/* Sidebar Thêm loại chi tiêu */}
            <div className="w-[25%] p-5 pink-bg rounded-lg h-full flex flex-col justify-between">
                <div className="mb-3 p-2 bg-yellow-300 rounded-lg light-yellow-bg relative rounded-[20px] overflow-hidden">
                    <Image className="absolute right-0 top-0 pl-[320px] h-[100%] min-h-[150px]" src="/icons/spendtype/decoration.svg" alt="decoration" width={430} height={500} />
                    <div className="top-0 right-0 left-0 bottom-0 flex flex-col gap-2 px-4 py-4 z-[10]">
                        <h2 className="text-[13px] font-semibold">SỐ DƯ TỪ VÍ ĐIỆN TỬ</h2>
                        <div className="flex gap-5">
                            <Image className="" src="/icons/spendtype/wallet.svg" alt="decoration" width={50} height={50} />
                            <div>
                                <p className={styles.money}>{totalEstimated.toLocaleString('vi-VN')} VND</p>
                                <p className="text-sm font-md">Tổng chi phí</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div>
                    <h3 className="text-[15px] mb-3 font-bold">Thêm Khoản Chi Tiêu</h3>
                    <form>
                        <div className="mb-3">
                            <div className={styles.inputGroup}>
                                <input
                                    type="text"
                                    value={expenditureName} // Sử dụng spendName thay vì spendType
                                    onChange={(e) => setExpenditureName(e.target.value)} // Cập nhật state cho spendName
                                    className={styles.inputLo}
                                    required
                                    autoComplete="off"
                                />
                                <label htmlFor="spendName" className={styles.text}>
                                    Tên khoản chi tiêu
                                </label>
                            </div>
                        </div>

                        <div className="mb-3">
                            <div className={styles.inputGroup}>
                                <select
                                    value={expenditureSpendType}
                                    onChange={(e) => {
                                        const value = e.target.value; // Lấy giá trị được chọn
                                        setExpenditureSpendType(value); // Cập nhật state cho spendType
                                        setExpenditureAmount(0); // Đặt lại số tiền khi loại chi tiêu thay đổi
                                    }}
                                    className={styles.inputLo}
                                    required
                                >
                                    <option value="" disabled></option>
                                    {spendTypes.map((option) => (
                                        <option key={option.id} value={option.id}>
                                            {option.name}
                                        </option>
                                    ))}
                                </select>
                                <label htmlFor="spendType" className={styles.text}>
                                    Loại chi tiêu
                                </label>
                            </div>
                        </div>

                        <div className="mb-3">
                            <div className={styles.inputGroup}>
                                <input
                                    type="text"
                                    value={Math.round(expenditureAmount != null ? expenditureAmount : 0).toLocaleString('vi-VN')}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, ""); // Remove all non-numeric characters
                                        setExpenditureAmount(Number(value)); // Store as a number
                                    }}
                                    onBlur={() => setExpenditureAmount(Math.round(expenditureAmount != null ? expenditureAmount : 0))}
                                    className={styles.inputLo}
                                    required
                                    autoComplete="off"
                                />
                                <label htmlFor="email" className={styles.text}>
                                    Số tiền
                                </label>
                            </div>
                        </div>
                                    {/*của Thắng*/}
                        {/* <div className="mb-3">
                            <div className={styles.inputGroup}>
                                <input
                                    type="date"
                                    value={expenditureDate || ""}
                                    onChange={(e) => setExpenditureDate(e.target.value)}
                                    className={styles.inputLo}
                                    required
                                    autoComplete="off"
                                    placeholder=" Ngày tháng"
                                />
                            </div>
                        </div> */}
                                    {/*của Thịnh*/}
                        <div className="mb-3">
                            <div className={styles.inputGroup}>
                            <DatePicker
                                selected={expenditureDate || ""}
                                onChange={(e) => setExpenditureDate(e)}
                                dateFormat="dd/MM/yyyy"
                                className={styles.inputLo}
                                placeholderText="Chọn ngày" // Thêm thuộc tính placeholderText
                            />
                            </div>
                        </div>

                        <div onClick={createNewExpenditure} className="mt-3 w-full p-2 light-yellow-bg text-white rounded-[0.78rem] transition-opacity duration-300 hover:opacity-50 justify-center flex items-center cursor-pointer">Thêm chi tiêu</div>
                    </form>
                </div>
            </div>

            {/* Bảng các loại chi tiêu */}
            <div className="w-2/3 flex flex-col h-full">

                <div className={styles.category}>
                    <div className={styles.headCate}>
                        <p className={styles.txthead}>Các Loại Chi Tiêu</p>
                        {/* <button className={styles.btnhead}>+</button> */}
                        <Link href="/spendtype" className={styles.btnhead}>
                            +
                        </Link>
                    </div>
                    <div className={styles.contentCate}>
                        {spendTypes.map((item, index) => (
                            <div className={styles.iconBack}>
                                <div className={styles.icon} style={{ backgroundColor: item.color.colorCode }}>
                                    <FontAwesomeIcon icon={getIconFromSvgUrl(item.icon.svgUrl)} />
                                </div>
                                <p className={styles.txtIcon}>{item.name}</p>
                            </div>
                            ))}
                    </div>

                </div>

                <table>
                    <div className={styles.headtbl}>
                        <div className={styles.titletbl}>
                            <p className={styles.titleTbl}>Các Khoản Chi Trong Tháng</p>
                            <p className={styles.titleTbl1}>Hoạt động hàng tháng</p>
                        </div>
                        <div className={styles.search}>
                            <input
                                type="text"
                                placeholder="Tìm kiếm các khoản"
                                className={styles.searchTbl}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <div className={styles.iconOverlay}>
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                        </div>

                    </div>

                </table>
                <div className={styles.tableContainer}>
                    <table className="min-w-full tao-bg">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="text-left py-3 px-4 font-semibold text-sm">Tên Chi Tiêu</th>
                                <th className="text-left py-3 px-4 font-semibold text-sm">Loại Thanh Toán</th>
                                <th className="text-left py-3 px-4 font-semibold text-sm">Ngày Tháng</th>
                                <th className="text-left py-3 px-4 font-semibold text-sm">Số Tiền</th>
                                <th className="text-left py-3 px-4 font-semibold text-sm"></th>
                            </tr>
                        </thead>
                        <tbody className={styles.bodyTbl}>
                            {filteredHistory.map((item, index) => (
                                <tr key={index} className="relative hover:bg-[#fd3b003a] rounded-[10px]">
                                    <td className="py-3 px-4 flex items-center space-x-2 z-[100]">
                                        <div className={styles.nameIcon}>
                                            <div style={{ backgroundColor: item.typeSprinding.color.colorCode }} className={styles.bgrIcon}>
                                                <FontAwesomeIcon icon={getIconFromSvgUrl(item.typeSprinding.icon.svgUrl)} className={styles.iconTable} />
                                            </div>
                                            <p>{item.name}</p>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4">{item.typeSprinding.name}</td>
                                    <td className="py-3 px-4">{new Date(item.dateSpinding).toLocaleDateString('en-GB').replace(/\//g, '-')}</td>
                                    <td className="py-3 px-4">{Math.round(item.amount).toLocaleString("vi-VN")} VND</td>

                                    <td className={styles.btnTble}>
                                        <button onClick={() => showModal(item)} className={styles.editBtn}>
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                        </button>
                                        <button className={styles.deleteBtn} onClick={() => handleDeleteClick(item)}>
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal xác nhận xóa */}
            {isDeleteModalOpen && (
                <div className={styles.modalOverplay}>
                    <div className={"bg-white p-6 rounded-lg"}>
                        <div className={styles.headDeleMobal}>
                            <Image src="/icons/logo.svg" alt="logo" width={70} height={70} />
                            <div className={styles.titleDele}>
                                <p className={styles.titleDeleMobal}>Bạn có chắc chắn muốn xóa không</p>
                                <p>Một khi đã xóa thì không thể khôi phục lại.</p>
                            </div>
                        </div>
                        <div className={styles.btnDeleMobal}>
                            <button
                                className={styles.btnCan}
                                onClick={handleCancelDelete}
                            >
                                Hủy bỏ
                            </button>
                            <button
                                className={styles.btnOk}
                                onClick={handleConfirmDelete}
                            >
                                Xác nhận
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal chỉnh sửa loại chi tiêu */}
            <Modal
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                width="30%"
                className={styles.mobalEditSpen}
                styles={{
                    content: {
                        backgroundColor: '#fff5e2', // Ensure the content area has the desired background color
                        borderRadius: '8px',
                        marginTop: '-40px'
                    },
                    body: {
                        backgroundColor: '#fff5e2', // Ensure the modal body has the desired background
                    },
                }}
            >
                <div className={styles.containerMobal}>
                    <div className={styles.headMobal}>
                        <Image src="/icons/logo.svg" alt="logo" width={50} height={50} />
                        <p className={styles.titleMobal}>Chỉnh Sửa Loại Chi Tiêu</p>
                    </div>
                    <div className="mb-3">
                        <div className={styles.inputGroup}>
                            <input
                                type="text"
                                value={editExpenditureName} // Sử dụng spendName thay vì spendType
                                onChange={(e) => setEditExpenditureName(e.target.value)} // Cập nhật state cho spendName
                                className={styles.inputLo}
                                required
                                autoComplete="off"
                            />
                            <label htmlFor="spendName" className={styles.text}>
                                Tên khoản chi tiêu
                            </label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <div className={styles.inputGroup}>
                            <select
                                value={editExpenditureType}
                                onChange={(e) => {
                                    const value = e.target.value; // Lấy giá trị được chọn
                                    setEditExpenditureType(value); // Cập nhật state cho spendType
                                }}
                                className={styles.inputLo}
                                required
                            >
                                <option value="" disabled></option>
                                {spendTypes.map((option) => (
                                    <option key={option.id} value={option.id}>
                                        {option.name}
                                    </option>
                                ))}
                            </select>
                            <label htmlFor="spendType" className={styles.text}>
                                Loại chi tiêu
                            </label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <div className={styles.inputGroup}>
                            <input
                                type="text"
                                value={Math.round(editExpenditureSpendAmount != null ? editExpenditureSpendAmount : 0).toLocaleString('vi-VN')}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/\D/g, ""); // Remove all non-numeric characters
                                    setEditExpenditureSpendAmount(Number(value)); // Store as a number
                                }}
                                onBlur={() => setEditExpenditureSpendAmount(Math.round(editExpenditureSpendAmount != null ? editExpenditureSpendAmount : 0))}
                                className={styles.inputLo}
                                required
                                autoComplete="off"
                            />
                            <label htmlFor="email" className={styles.text}>
                                Số tiền
                            </label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <div className={styles.inputGroup}>
                            <input
                                type="date"
                                value={editExpenditureDate || ""}
                                onChange={(e) => setEditExpenditureDate(e.target.value)}
                                className={styles.inputLo}
                                required
                                autoComplete="off"
                                placeholder=" Ngày tháng"
                            />
                        </div>
                    </div>

                    <div className={styles.modalFooter}>
                        <Button type="primary" onClick={handleOk} className={styles.btnMobal}>
                            Lưu thông tin
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default SpendType;