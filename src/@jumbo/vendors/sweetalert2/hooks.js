import Swal from 'sweetalert2';
import useStyles from "@jumbo/vendors/sweetalert2/style";
import withReactContent from "sweetalert2-react-content";

const useSwalWrapper = () => {
    const sweetAlertStyles = useStyles();
    const FinalSwal = Swal.mixin({
        customClass: {
            container: `${sweetAlertStyles.container}`,
            popup: `${sweetAlertStyles.popup}`,
            title: `${sweetAlertStyles.title}`,
            closeButton: `${sweetAlertStyles.closeButton}`,
            image: `${sweetAlertStyles.image}`,
            htmlContainer: `${sweetAlertStyles.htmlContainer}`,
            confirmButton: `${sweetAlertStyles.confirmButton}`,
            cancelButton: `${sweetAlertStyles.cancelButton}`,
            footer: `${sweetAlertStyles.footer}`,
        },
        buttonsStyling: false,
    });

    return withReactContent(FinalSwal);
};

export default useSwalWrapper;