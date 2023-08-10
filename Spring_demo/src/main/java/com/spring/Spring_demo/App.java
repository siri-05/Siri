package com.spring.Spring_demo;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App 
{
    public static void main( String[] args )
    {
        ApplicationContext context=new ClassPathXmlApplicationContext("config.xml");
        student s1=(student)context.getBean("std1");
        student s2=(student)context.getBean("std2");
        person p=(person)context.getBean("per");
        System.out.println(s1+"\n"+s2+"\n"+p);
    }
}
