import useJumboLayoutFooter from "@jumbo/hooks/useJumboLayoutFooter";
import useJumboLayoutHeader from "@jumbo/hooks/useJumboLayoutHeader";
import useJumboLayoutSidebar from "@jumbo/hooks/useJumboLayoutSidebar";
import useJumboLayoutRoot from "@jumbo/hooks/useJumboLayoutRoot";
import useJumboLayoutContent from "@jumbo/hooks/useJumboLayoutContent";

const useJumboLayout = () => {
    const {setSidebarOptions} = useJumboLayoutSidebar();
    const {setHeaderOptions} = useJumboLayoutHeader();
    const {setFooterOptions} = useJumboLayoutFooter();
    const {setRootOptions} = useJumboLayoutRoot();
    const {setContentOptions} = useJumboLayoutContent();

    const setJumboLayoutOptions = (layoutOptions) => {
        setSidebarOptions(layoutOptions?.sidebar);
        setHeaderOptions(layoutOptions?.header);
        setFooterOptions(layoutOptions?.footer);
        setRootOptions(layoutOptions?.root);
        setContentOptions(layoutOptions?.content);
    };

    return {setJumboLayoutOptions};
};

export default useJumboLayout;
