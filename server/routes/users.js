import  Express  from "express";
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
} from "../controllers/users.js";
import {verifyToken} from "../middleware/auth.js";
const router= Express.Router();

/* Read */

router.get("/:id",verifyToken,getUser);
router.get(":/id/friends",verifyToken,getUserFriends);

/* update */

router.patch("/:id/:friendId",verifyToken,addRemoveFriend);

export default router;