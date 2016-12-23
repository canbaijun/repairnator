package fr.inria.spirals.jtravis.entities;

import fr.inria.spirals.jtravis.helpers.LogHelper;
import fr.inria.spirals.jtravis.pojos.LogPojo;

/**
 * Business object to deal with log in Travis CI API
 * If the body of the log has been archived, it is lazily get as plain text from the archive using job endpoint (see {@link https://docs.travis-ci.com/api#logs})
 *
 * @author Simon Urli
 */
public class Log extends LogPojo {

    @Override
    public String getBody() {
        if (super.getBody() != null && !super.getBody().equals("")) {
            return super.getBody();
        } else {
            String body = LogHelper.getRawLogFromEmptyLog(this);
            this.setBody(body);
            return body;
        }
    }
}