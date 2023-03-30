import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"
import { Profile } from "../models/Account.js"

class ProfilesService {

  async getProfileById(profileId) {
    AppState.profile = null
    const res = await api.get('api/profiles/' + profileId)
    logger.log('[Getting profile from api]', res.data)
    AppState.profile = new Profile(res.data)
  }

}

export const profilesService = new ProfilesService()