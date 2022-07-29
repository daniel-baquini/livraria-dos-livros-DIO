package com.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

@RestController
public class AppController {

    @RequestMapping(value="/", method = RequestMethod.GET)
    public RedirectView ha() {
        return this.gotoNextPage();
    }
    
    @RequestMapping(value="/app",method = RequestMethod.GET)
    public RedirectView gotoNextPage(){
        return new RedirectView("/app/index.html", true);
    }

}
