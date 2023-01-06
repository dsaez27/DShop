import { fetchSinToken } from "@/utils/fetch";
import { useQuery } from "@tanstack/react-query";

const getCampaigns = async () => {
    try {
        const { data } = await fetchSinToken("campaign");
        return data;
    } catch (error) {
        console.error(error);
        return { error };
    }
};

export const useCampaigns = () => {
    const campaignsQuery = useQuery(["campaigns"], getCampaigns, {
        staleTime: 1000 * 60 * 60 * 24,
    });

    return {
        campaigns: campaignsQuery.data?.campaigns || [],
        isLoading: campaignsQuery.isLoading,
        error: campaignsQuery.error || campaignsQuery.data?.error,
    };
};
