import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class ProfilesService {

  getProfileById(profileId) {
    // logger.log('[SERVICE]', profileId)
    const res = api.get('api/profiles/' + profileId)
    logger.log(res.data)
  }

}

export const profilesService = new ProfilesService()