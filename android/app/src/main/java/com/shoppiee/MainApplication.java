package com.shoppiee;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.swmansion.reanimated.ReanimatedPackage;
import com.horcrux.svg.SvgPackage;
import com.reactnativecommunity.viewpager.RNCViewPagerPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

// Localize
import com.reactcommunity.rnlocalize.RNLocalizePackage; 

// Google Login
import co.apptailor.googlesignin.RNGoogleSigninPackage;

// Facebook Login
import com.facebook.CallbackManager;
import com.facebook.FacebookSdk;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.facebook.appevents.AppEventsLogger;

public class MainApplication extends Application implements ReactApplication {
  private static CallbackManager mCallbackManager = CallbackManager.Factory.create();

  protected static CallbackManager getCallbackManager() {
    return mCallbackManager;
  }

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new AsyncStoragePackage(),
            new RNGoogleSigninPackage(),
            new FBSDKPackage(mCallbackManager),
            new VectorIconsPackage(),
            new ReanimatedPackage(),
            new SvgPackage(),
            new RNCViewPagerPackage(),
            new RNGestureHandlerPackage(),
            new RNLocalizePackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
